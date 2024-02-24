import axios from 'axios';

// export const baseURL = 'http://localhost:8080/api';
export const baseURL = 'https://enoch-boot-camp-school-sigma.vercel.app/api';

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('jwt')) {
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
  }

  return req;
});

export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);
