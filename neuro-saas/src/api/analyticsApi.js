import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/analytics`,
});

export const getStats = () => API.get("/stats");