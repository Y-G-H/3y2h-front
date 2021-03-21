import axios from 'axios';
import router from '@/router';
// import store from "src/common/store";
// import {toLogin} from "src/utils";
// import {interceptorWhiteList} from "src/config";
// import {initData, refreshToken} from "src/pages/init";

const instance = axios.create({
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  error => Promise.reject(error.request),
);

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error.response);
  },
);

export default function(url, options) {
  return instance({
    url,
    ...options,
  });
}
