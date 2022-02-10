import axios from "axios";

export default axios.create({
  // baseURL: "http://ec2-3-86-229-150.compute-1.amazonaws.com/",
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5050",
  timeout: 5000,
  withCredentials: true,
});
