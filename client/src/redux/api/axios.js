import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5050",
  timeout: 5000,
  withCredentials: true,
});
