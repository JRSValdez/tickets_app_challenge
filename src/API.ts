import axios from 'axios';

// Create axios client, pre-configured with baseURL
let API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token:string) => {
  API.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default API;