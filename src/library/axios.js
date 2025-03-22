import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5500",

  // baseURL: "https://attendance-backend-app.up.railway.app",
  headers: { "Content-Type": "application/json" },
});

// Automatically attach token to requests
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token"); 
      window.location.href = "/admin";  
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
