import axios from 'axios';
import router from '@/router';
axios.defaults.baseURL = 'http://47.111.92.149:8080/';

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
