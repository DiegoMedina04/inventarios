import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://10.1.1.222:5000/api',
  headers: {
    'Content-Type': 'application/json',
    
  },
});
