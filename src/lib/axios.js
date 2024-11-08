// src/lib/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Backend URL from .env
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request or response interceptors if needed
api.interceptors.request.use(
  (config) => {
    // You can add token handling here if needed
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
