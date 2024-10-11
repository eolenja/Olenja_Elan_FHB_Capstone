import axios from 'axios';
import { getToken } from '../Utils/localStorageUtils';

const localInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
});

localInstance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default localInstance;