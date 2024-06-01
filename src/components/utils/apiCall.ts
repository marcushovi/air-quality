import axios from "axios";
import mockApiCall from "./mockApiCall";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const DATA_SOURCE = process.env.NEXT_PUBLIC_DATA_SOURCE;

interface ApiCallOptions {
  method: "GET" | "POST";
  path: string;
  data?: any;
  params?: any;
}

export const apiCall = async ({
  method,
  path,
  data,
  params,
}: ApiCallOptions) => {
  // Check if using mock data
  if (DATA_SOURCE === "mock") {
    return await mockApiCall({ method, path, data, params });
  }

  try {
    const url = `${BASE_URL}${path}`;

    const config = {
      method,
      url,
      data,
      params,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios(config);

    return response.data;
  } catch (error: any) {
    console.error("API call failed:", error.response || error.message);
    throw new Error(error.response?.data.error || "Unknown error");
  }
};
