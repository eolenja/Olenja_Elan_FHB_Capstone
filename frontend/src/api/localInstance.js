// src/api/localInstance.js
import axios from 'axios';
import { getToken } from '../Utils/localStorageUtils';

const localInstance = axios.create({
    baseURL: 'http://localhost:8080/api', // Adjust the base URL as needed
});

// Add a request interceptor to include the token
localInstance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Include the token
    }
    return config;
});

export default localInstance;