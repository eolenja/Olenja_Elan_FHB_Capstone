// src/utils/localStorageUtils.js

// Function to store a token
export const storeToken = (token) => {
    localStorage.setItem('token', token);
};

// Function to retrieve a token
export const getToken = () => {
    return localStorage.getItem('token');
};

// Function to remove a token
export const removeToken = () => {
    localStorage.removeItem('token');
};