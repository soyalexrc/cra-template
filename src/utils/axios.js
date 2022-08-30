import axios from "axios";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  // PRODUCTION
  baseURL: "http://138.219.42.156:3000/api/",
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
