import axios from 'axios';

const localInstance = axios.create({
    baseURL: 'http://localhost:8080/api', // Adjust the base URL as necessary
});

// Add a request interceptor
localInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Get the token
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Add token to headers
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
localInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response) {
            const { status, data } = error.response;
            console.error(`HTTP error: ${status}`, data);
            if (status === 401) {
                console.error('Unauthorized access - possibly invalid token');
                // Optionally, redirect to login page
                // window.location.href = '/login';
            }
        } else {
            console.error('Network or server error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default localInstance;