import Axios, {InternalAxiosRequestConfig} from 'axios';

import { API_URL } from '@/config';
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
      return Promise.reject(error);
    }
);