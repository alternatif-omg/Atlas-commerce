import axios from "axios";

// Gunakan VITE_API_URL dari env, tanpa trailing slash
const BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.MODE === "development" ? "http://localhost:5000" : "/api");

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,  // pastikan /api disesuaikan dengan route backend kamu
  withCredentials: true,       // supaya cookie ikut dikirim
});

export default axiosInstance;
