import axios from "axios";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  // PRODUCTION
  baseURL: "http://100.42.69.119:3000/api/",
  headers: { "Access-Control-Allow-Origin": "*" },
  mode: "CORS",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
