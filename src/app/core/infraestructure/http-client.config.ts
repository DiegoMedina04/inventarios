import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://10.1.1.218:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
