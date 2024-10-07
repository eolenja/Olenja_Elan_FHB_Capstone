import axios from 'axios';

const localInstance = axios.create({
  baseURL: 'http://localhost:8080/api'
});

// Request interceptor to add the token to headers
localInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      console.warn('No token found in localStorage');
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
localInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        console.error('Unauthorized access - possibly invalid token');
        // Optionally, redirect to login page
        // window.location.href = '/login';
      } else if (status === 403) {
        console.error('Forbidden - you do not have permission to access this resource');
      } else {
        console.error(`HTTP error: ${status}`);
      }
    } else {
      console.error('Network or server error:', error);
    }
    return Promise.reject(error);
  }
);

export default localInstance;
