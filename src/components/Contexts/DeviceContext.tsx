"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { apiCall } from "../utils/apiCall";
import { showNotification } from "@mantine/notifications";
import { useUser } from "./UserContext";

interface Device {
  status: string;
  serial_number: string;
  device_id: string;
  name: string;
  location: string;
  co2_green: number;
  co2_yellow: number;
  co2_red: number;
}

interface SensorData {
  co2: any;
  voc: any;
  nox: any;
  temperature: any;
  humidity: any;
  date: string | number | Date;
  // Define the structure of sensor data as per your API response
}

interface DeviceContextType {
  isLoadingDevices: boolean;
  remainingTimeToRefresh: number;
  devices: Device[];
  setDevices: React.Dispatch<React.SetStateAction<Device[]>>;
  fetchDevices: () => Promise<void>;
  addDevice: (deviceData: Device) => Promise<void>;
  updateDevice: (deviceData: Device) => Promise<void>;
  deleteDevice: (deviceId: string) => Promise<void>;
  getSensorData: (deviceId: string, date: string) => Promise<SensorData[]>;
  getDeviceState: (deviceId: string) => Promise<boolean>;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const DeviceProvider = ({ children }: { children: ReactNode }) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const { isLoading, user } = useUser();
  const [isLoadingDevices, setIsLoadingDevices] = useState(true);
  const [remainingTimeToRefresh, setRemainingTimeToRefresh] = useState(300); // 5 minutes in seconds
  const apiCallDelay =
    parseInt(process.env.NEXT_PUBLIC_API_CALL_DELAY ?? "") || 1000;
  const refreshSensorDataInterval =
    parseInt(process.env.NEXT_PUBLIC_REFRESH_SENSOR_DATA_INTERVAL ?? "") ||
    300005;

  useEffect(() => {
    const fetchDevicesData = async () => {
      await fetchDevices();

      await updateAllDeviceStates();
    };
    if (!isLoading && user) {
      // If user is loaded and not loading
      fetchDevicesData();
      // Set interval to fetch device states every 5 minutes
      const fetchInterval = setInterval(() => {
        updateAllDeviceStates();
        setRemainingTimeToRefresh(300); // Reset remaining time after each fetch
      }, 5 * 60 * 1000); // 5 minutes in milliseconds

      // Set interval to update remaining time every second
      const timerInterval = setInterval(() => {
        setRemainingTimeToRefresh((prev) => (prev > 0 ? prev - 1 : 300));
      }, 1000);

      // Cleanup interval on component unmount
      return () => {
        clearInterval(fetchInterval);
        clearInterval(timerInterval);
      };
    }
  }, [isLoading, user]);

  const fetchDevices = async () => {
    setIsLoadingDevices(true);
    try {
      const data = await apiCall({
        method: "GET",
        path: "/device/get-list/",
      });

      if (data.status === "OK") {
        let devices = [];
        for (var key in data.data) {
          devices.push(data.data[key]);
        }
        setDevices(devices);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      showNotification({
        title: "Loading Failed",
        message: error.message,
        color: "red",
      });
    }
    setTimeout(() => {
      // Simulate loading time
      setIsLoadingDevices(false);
    }, apiCallDelay);
  };

  const addDevice = async (deviceData: Device) => {
    setIsLoadingDevices(true);

    try {
      const data = await apiCall({
        method: "POST",
        path: "/device/add/",
        data: deviceData,
      });

      if (data.status === "OK") {
        setDevices((prev) => [...prev, data.data]);
        showNotification({
          title: "Device Added",
          message: data.error,
          color: "green",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      showNotification({
        title: "Add Device Failed",
        message: error.message,
        color: "red",
      });
    }
    updateAllDeviceStates();
    setTimeout(() => {
      // Simulate loading time
      setIsLoadingDevices(false);
    }, apiCallDelay);
  };

  const updateDevice = async (deviceData: Device) => {
    setIsLoadingDevices(true);

    try {
      const data = await apiCall({
        method: "POST",
        path: "/device/update/",
        data: deviceData,
      });

      if (data.status === "OK") {
        setDevices((prev) =>
          prev.map((d) =>
            d.device_id === deviceData.device_id ? { ...d, ...deviceData } : d
          )
        );
        showNotification({
          title: "Device Updated",
          message: data.error,
          color: "green",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      showNotification({
        title: "Update Device Failed",
        message: error.message,
        color: "red",
      });
    }
    setTimeout(() => {
      // Simulate loading time
      setIsLoadingDevices(false);
    }, apiCallDelay);
  };

  const deleteDevice = async (deviceId: string) => {
    setIsLoadingDevices(true);

    try {
      const data = await apiCall({
        method: "GET",
        path: `/device/delete/?device_id=${deviceId}`,
      });

      if (data.status === "OK") {
        setDevices((prev) => prev.filter((d) => d.device_id !== deviceId));
        showNotification({
          title: "Device Deleted",
          message: data.error,
          color: "green",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      showNotification({
        title: "Delete Device Failed",
        message: error.message,
        color: "red",
      });
    }
    setTimeout(() => {
      // Simulate loading time
      setIsLoadingDevices(false);
    }, apiCallDelay);
  };

  const getSensorData = async (deviceId: string, date: string) => {
    setIsLoadingDevices(true);
    try {
      const data = await apiCall({
        method: "GET",
        path: `/data/get-data/?device_id=${deviceId}&date=${date}`,
      });

      if (data.status === "OK") {
        return data.data;
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      showNotification({
        title: "Get Sensor Data Failed",
        message: error.message,
        color: "red",
      });
      return [];
    } finally {
      setIsLoadingDevices(false);
    }
  };

  const getDeviceState = async (deviceId: string) => {
    setIsLoadingDevices(true);
    try {
      const data = await apiCall({
        method: "GET",
        path: `/data/get-state/?device_id=${deviceId}`,
      });

      if (data.status === "OK") {
        return data;
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      showNotification({
        title: "Get Device State Failed",
        message: error.message,
        color: "red",
      });
      return false;
    } finally {
      setIsLoadingDevices(false);
    }
  };

  const getAllDeviceStates = async () => {
    setIsLoadingDevices(true);
    try {
      const data = await apiCall({
        method: "GET",
        path: `/data/get-all-states/`,
      });

      if (data.status === "OK") {
        let states = [];
        for (var key in data.data) {
          states.push({ device_id: key, status: data.data[key] });
        }
        return states;
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      showNotification({
        title: "Get All Device States Failed",
        message: error.message,
        color: "red",
      });
      return [];
    } finally {
      setTimeout(() => {
        // Simulate loading time
        setIsLoadingDevices(false);
      }, apiCallDelay);
    }
  };

  const updateAllDeviceStates = async () => {
    const states = await getAllDeviceStates();
    setDevices((prevDevices) =>
      prevDevices.map((device) => {
        const state = states.find((s) => s.device_id === device.device_id);
        return state ? { ...device, status: state.status } : device;
      })
    );
  };

  return (
    <DeviceContext.Provider
      value={{
        isLoadingDevices,
        remainingTimeToRefresh,
        devices,
        setDevices,
        fetchDevices,
        addDevice,
        updateDevice,
        deleteDevice,
        getSensorData,
        getDeviceState,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevices = () => {
  const context = useContext(DeviceContext);
  if (context === undefined) {
    throw new Error("useDevices must be used within a DeviceProvider");
  }
  return context;
};
