import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

const API_URL = `http://localhost:5000/`;

// axios.defaults.withCredentials = true;

const $api = axios.create({
  withCredentials: true,
  // headers: {
  //   "Access-Control-Allow-Origin": "http://localhost:5000",
  //   "Access-Control-Allow-Credentials": "true",
  //   "Access-Control-Allow-Methods": "*",
  // },
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}token/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        console.log("response", response);
        return $api.request(originalRequest);
      } catch (e) {
        console.log(e);
        console.log("НЕ АВТОРИЗОВАН");
      }
    }
    throw error;
  }
);

export default $api;
