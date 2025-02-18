import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // This ensures Vite forwards the request to the backend
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
