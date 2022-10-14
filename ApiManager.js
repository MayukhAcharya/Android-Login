import axios from "axios";

const ApiManager = axios.create({
  baseURL: "http://52.39.161.106:8000/api",
  responseType: "json",
  withCredentials: true,
});

export default ApiManager;
