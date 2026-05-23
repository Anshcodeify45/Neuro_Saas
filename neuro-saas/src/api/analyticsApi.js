import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/analytics",
});

export const getStats = () => API.get("/stats");