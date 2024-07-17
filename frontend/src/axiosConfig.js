import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  withCredentials: true, // Send cookies along with the request
});

export default instance;
