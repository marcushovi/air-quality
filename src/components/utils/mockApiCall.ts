import Cookies from "js-cookie";

interface ApiCallOptions {
  method: "GET" | "POST";
  path: string;
  data?: any;
  params?: any;
}

const mockUsers = [
  {
    id: 1,
    login: "jankomrkvicka",
    degree: "Bc.",
    name: "Janko",
    surname: "Mrkvička",
    company: "Unicorn",
    email: "jankomrkvicka@unicorn.net",
    phone: "+420 948 352 212",
  },
  // More mock users can be added here
];

let mockDevices = [
  {
    device_id: "123",
    serial_number: "SN5010KETU13221",
    name: "Sensor Hub",
    location: "Office",
    co2_green: 400,
    co2_yellow: 800,
    co2_red: 1200,
  },
  // More mock devices can be added here
];

const simulateNetworkDelay = (data: any) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 500));

const mockApiCall = async ({ method, path, data, params }: ApiCallOptions) => {
  if (path === "/user/login/" && method === "POST") {
    const user = mockUsers.find(
      (u) => u.login === data.login && data.password === "@#Jankomrkvicka123"
    );
    if (user) {
      Cookies.set("session_id", "mockSessionId12345", { expires: 1 });
      return simulateNetworkDelay({
        status: "OK",
        user_data: user,
        error: "",
      });
    } else {
      return simulateNetworkDelay({
        status: "KO",
        error: "Invalid credentials",
      });
    }
  }

  if (path === "/user/logout/" && method === "GET") {
    Cookies.remove("session_id");
    return simulateNetworkDelay({
      status: "OK",
      error: "",
    });
  }

  if (path === "/user/get-logged-user/" && method === "GET") {
    const sessionId = Cookies.get("session_id");
    if (sessionId) {
      return simulateNetworkDelay({
        status: "OK",
        user_data: mockUsers[0], // Assuming the first user is always logged in
        error: "",
      });
    } else {
      return simulateNetworkDelay({
        status: "KO",
        error: "No user is logged in",
      });
    }
  }

  if (path === "/user/update-settings/" && method === "POST") {
    const sessionId = Cookies.get("session_id");
    if (sessionId) {
      const updatedUser = { ...mockUsers[0], ...data };
      return simulateNetworkDelay({
        status: "OK",
        user_data: updatedUser,
        error: "",
      });
    } else {
      return simulateNetworkDelay({
        status: "KO",
        error: "No user is logged in",
      });
    }
  }

  // Device-specific authenticated endpoints
  if (path === "/device/get/" && method === "GET") {
    const sessionId = Cookies.get("session_id");
    if (sessionId) {
      const device = mockDevices.find((d) => d.device_id === params.device_id);
      return simulateNetworkDelay({
        status: device ? "OK" : "KO",
        device_data: device,
        error: device ? "" : "Device not found",
      });
    } else {
      return simulateNetworkDelay({
        status: "KO",
        error: "No user is logged in",
      });
    }
  }

  if (path === "/device/get-list/" && method === "GET") {
    const sessionId = Cookies.get("session_id");
    if (sessionId) {
      return simulateNetworkDelay({
        status: "OK",
        device_datas: mockDevices,
        error: "",
      });
    } else {
      return simulateNetworkDelay({
        status: "KO",
        error: "No user is logged in",
      });
    }
  }

  if (path === "/device/add/" && method === "POST") {
    const sessionId = Cookies.get("session_id");
    if (sessionId) {
      const newDevice = { device_id: String(Date.now()), ...data };
      mockDevices.push(newDevice);
      return simulateNetworkDelay({
        status: "OK",
        device_data: newDevice,
        error: "",
      });
    } else {
      return simulateNetworkDelay({
        status: "KO",
        error: "No user is logged in",
      });
    }
  }

  if (path === "/device/update/" && method === "POST") {
    const sessionId = Cookies.get("session_id");
    if (sessionId) {
      const deviceIndex = mockDevices.findIndex(
        (d) => d.device_id === data.device_id
      );
      if (deviceIndex !== -1) {
        mockDevices[deviceIndex] = { ...mockDevices[deviceIndex], ...data };
        return simulateNetworkDelay({
          status: "OK",
          device_data: mockDevices[deviceIndex],
          error: "",
        });
      } else {
        return simulateNetworkDelay({
          status: "KO",
          error: "Device update failed",
        });
      }
    } else {
      return simulateNetworkDelay({
        status: "KO",
        error: "No user is logged in",
      });
    }
  }

  if (path === "/device/delete/" && method === "GET") {
    const sessionId = Cookies.get("session_id");
    if (sessionId) {
      const initialLength = mockDevices.length;
      mockDevices = mockDevices.filter((d) => d.device_id !== params.device_id);
      const success = mockDevices.length < initialLength;
      return simulateNetworkDelay({
        status: success ? "OK" : "KO",
        error: success ? "" : "Device deletion failed",
      });
    } else {
      return simulateNetworkDelay({
        status: "KO",
        error: "No user is logged in",
      });
    }
  }

  // // Device data-related endpoints
  // if (path === "/api/data/get-data/" && method === "GET") {
  //   const sessionId = Cookies.get("session_id");
  //   if (sessionId) {
  //     const device = mockDevices.find((d) => d.device_id === params.device_id);
  //     if (device) {
  //       const sensorsData = device.sensors_data.filter(
  //         (sd) => sd.date === params.date
  //       );
  //       return simulateNetworkDelay({
  //         status: "OK",
  //         sensors_datas: sensorsData,
  //         error: "",
  //       });
  //     } else {
  //       return simulateNetworkDelay({
  //         status: "KO",
  //         error: "Device not found",
  //       });
  //     }
  //   } else {
  //     return simulateNetworkDelay({
  //       status: "KO",
  //       error: "No user is logged in",
  //     });
  //   }
  // }

  // if (path === "/api/data/get-state/" && method === "GET") {
  //   const sessionId = Cookies.get("session_id");
  //   if (sessionId) {
  //     const device = mockDevices.find((d) => d.device_id === params.device_id);
  //     if (device) {
  //       return simulateNetworkDelay({
  //         status: "OK",
  //         is_online: device.state === "online",
  //         error: "",
  //       });
  //     } else {
  //       return simulateNetworkDelay({
  //         status: "KO",
  //         error: "Device not found",
  //       });
  //     }
  //   } else {
  //     return simulateNetworkDelay({
  //       status: "KO",
  //       error: "No user is logged in",
  //     });
  //   }
  // }

  // if (path === "/api/data/get-all-states/" && method === "GET") {
  //   const sessionId = Cookies.get("session_id");
  //   if (sessionId) {
  //     const states = mockDevices.map((d) => ({
  //       device_id: d.device_id,
  //       state: d.state,
  //     }));
  //     return simulateNetworkDelay({
  //       status: "OK",
  //       states: states,
  //       error: "",
  //     });
  //   } else {
  //     return simulateNetworkDelay({
  //       status: "KO",
  //       error: "No user is logged in",
  //     });
  //   }
  // }

  return simulateNetworkDelay({
    status: "KO",
    error: "Path or method not implemented in mock",
  });
};

export default mockApiCall;
