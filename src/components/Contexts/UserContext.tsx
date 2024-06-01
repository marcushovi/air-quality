"use client";

import { notifications } from "@mantine/notifications";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { apiCall } from "../utils/apiCall";

interface User {
  degree?: string;
  name?: string;
  surname?: string;
  company?: string;
  email?: string;
  phone?: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (login: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
  updateUserSettings: (userData: Partial<User>) => Promise<void>;
  updatePassword: (
    oldPassword: string,
    newPassword: string,
    newPasswordAgain: string
  ) => Promise<void>;
  isLoading?: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Load user data from cookies when the provider initializes
  useEffect(() => {
    setIsLoading(true);
    const cookies = parseCookies();
    console.log("Cookies", cookies);
    if (cookies.user) {
      setUser(JSON.parse(cookies.user));
    }
    setTimeout(() => {
      // Simulate loading time
      setIsLoading(false);
    }, 1000);
  }, []);

  // Save user data to cookies whenever it changes
  useEffect(() => {
    setIsLoading(true);
    console.log("User changed", user);
    if (user !== null) {
      setCookie(null, "user", JSON.stringify(user), {
        maxAge: 3600, // 1 hour
        path: "/",
      });
    } else {
      console.log("Destroying cookie");
      destroyCookie({}, "user");
    }
    setTimeout(() => {
      // Simulate loading time
      setIsLoading(false);
    }, 1000);
  }, [user]);

  const login = async (login: string, password: string) => {
    try {
      const data = await apiCall({
        method: "POST",
        path: "/user/login/",
        data: { login, password },
      });
      if (data.status === "OK") {
        setUser(data.data);
        notifications.show({
          title: "Login Successful",
          message: "You have been successfully logged in.",
          color: "green",
        });
        return true;
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      notifications.show({
        title: "Login Failed",
        message: error.message,
        color: "red",
      });
    }

    return false;
  };

  const logout = async () => {
    try {
      const response = await apiCall({
        method: "GET",
        path: "/user/logout/",
      });
      if (response.status === "OK") {
        setUser(null);

        notifications.show({
          title: "Logged Out",
          message: "You have been successfully logged out.",
          color: "green",
        });
      } else {
        notifications.show({
          title: "Fail",
          message: response.error,
          color: "red",
        });
      }
    } catch (error: any) {
      notifications.show({
        title: "Logout Failed",
        message: error.message,
        color: "red",
      });
    }
  };

  const fetchUser = async () => {
    try {
      const data = await apiCall({
        method: "GET",
        path: "/user/get-logged-user/",
      });
      if (data.status === "OK") {
        setUser(data.data);
        notifications.show({
          title: "User Data Fetched",
          message: "User data has been successfully retrieved.",
          color: "green",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      notifications.show({
        title: "Fetching User Failed",
        message: error.message,
        color: "red",
      });
    }
  };

  const updateUserSettings = async (userData: Partial<User>) => {
    try {
      const data = await apiCall({
        method: "POST",
        path: "/user/update-settings/",
        data: userData,
      });
      if (data.status === "OK") {
        setUser(data.data);
        notifications.show({
          title: "User Settings Updated",
          message: "Your settings have been successfully updated.",
          color: "green",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      notifications.show({
        title: "Update Settings Failed",
        message: error.message,
        color: "red",
      });
    }
  };

  const updatePassword = async (
    oldPassword: string,
    newPassword: string,
    newPasswordAgain: string
  ) => {
    try {
      const data = await apiCall({
        method: "POST",
        path: "/user/update-password/",
        data: {
          old_password: oldPassword,
          new_password: newPassword,
          new_password_again: newPasswordAgain,
        },
      });
      if (data.status === "OK") {
        notifications.show({
          title: "Password Updated",
          message: "Your password has been successfully updated.",
          color: "green",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      notifications.show({
        title: "Update Password Failed",
        message: error.message,
        color: "red",
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoading,
        user,
        setUser,
        login,
        logout,
        fetchUser,
        updateUserSettings,
        updatePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
