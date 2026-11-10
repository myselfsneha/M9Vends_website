
import axios from "axios";

// API base URL
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

// Axios instance
const api = axios.create({
  baseURL: `${API_BASE_URL.replace(/\/+$/, "")}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default api;