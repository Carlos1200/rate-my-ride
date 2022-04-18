import axios from "axios";

const baseUrl = "http://localhost:4000";

const Api = axios.create({
  baseURL: baseUrl,
});

Api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers!["x-token"] = token;
  }
  return config;
});

export default Api;
