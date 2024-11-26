import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { EDVANCE_BASE_URL, TOKEN } from "../../../utility/constant";

const request = axios.create({
  baseURL: EDVANCE_BASE_URL,
});

request.interceptors.request.use(
  (config: any) => {
    const token = Cookies.get(TOKEN);
    if (token) {
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
  },
);


request.interceptors.response.use(
  (response: AxiosResponse) => response,
  (err) => {
    if (err.response && err.response.status === 401) {
      // remove cookies here and refresh
      Cookies.remove(TOKEN);
      window.location.reload();
    }
    throw err;
  },
);

export default request;
