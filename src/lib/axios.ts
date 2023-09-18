import Axios, {InternalAxiosRequestConfig} from 'axios';

import { API_URL } from '@/config';
import { addNotification } from '@/stores/notificationSlice';
import storage from '@/utils/storage';

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = storage.getToken();
  if (token) {
    config.headers!.authorization = `${token}`;
  }
  config.headers!.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      const message = error.response?.data?.message || error.message;

      addNotification({
        id: Date.now(),
        type: "error",
        title: "Error",
        message: message,
      });

      return Promise.reject(error);
    }
);