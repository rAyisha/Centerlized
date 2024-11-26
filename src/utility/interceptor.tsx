import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { BASE_URL, TOKEN } from "./constant";

const request = axios.create({
  baseURL: BASE_URL,
});

const handleTokenRemoval = () => {
  const token = Cookies.get(TOKEN);
  if (token !== undefined) {
    setTimeout(() => {
      Cookies.remove(TOKEN);
      window.location.reload();
    }, 1000000);
  }
};

handleTokenRemoval();
request.interceptors.request.use((config: any) => {
  const token = Cookies.get(TOKEN);
  console.log(token, "token");

  if (token) {
    console.log("headerscheck", config.headers);
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    } as AxiosRequestConfig;
  } else {
    return config;
  }
});

request.interceptors.response.use(
  (response: AxiosResponse) => response,
  (err) => {
    if (err.response && err.response.status === 401) {
      // remove cookies here and refresh
      Cookies.remove(TOKEN);
      window.location.reload();
    }
    throw err;
  }
);

export default request;
