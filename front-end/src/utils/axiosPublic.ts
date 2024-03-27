import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:4000";
export const axiosIncPublic = axios.create({
  baseURL: API_URL,
});
