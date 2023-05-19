import axios from "axios";
import { HOST } from "./host";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || HOST;

const api = axios.create({
  baseURL: `${SERVER_URL}`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async function (config) {
    const appToken = localStorage.getItem("Access_Token");
    config.headers.AuthToken = appToken;
    return config;
  },
  function (error) {
    console.warn(error);
    return Promise.reject(error);
  }
);

export default api;
