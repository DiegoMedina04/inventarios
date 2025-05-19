import axios from 'axios';
import { environment } from '../../../environment/environment';
;

export const api = axios.create({
  baseURL: environment.serverUrl,
  headers: {
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use((config) => {
  const token =document.cookie.split('; ').find(row => row.startsWith('token='))
    ?.split('=')[1];
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
