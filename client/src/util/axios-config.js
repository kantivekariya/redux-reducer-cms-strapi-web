import axios from "axios";
import config from "../_config/Config";

export function setupAxios() {
  axios.defaults.timeout = config.TIMEOUT;
  axios.defaults.baseURL = config.BASE_URL;
  axios.interceptors.request.use(onRequestSuccess, onRequestError);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
}

const onRequestSuccess = (response) => {
  // Do something before request is sent
  console.debug("Axios onRequestSuccess", response);
  return response;
};

const onRequestError = (error) => {
  // Do something with request error
  console.debug("Axios onRequestError", error);
  return Promise.reject(error);
};

const onResponseSuccess = (response) => {
  // Do something with response data
  console.debug("Axios onResponseSuccess", response);
  //   if (response) {
  //     return response.data;
  //   }
  return response;
};

const onResponseError = (error) => {
  // Do something with response error
  console.debug("Axios onResponseError", error.response);
  return Promise.reject(error);
};
