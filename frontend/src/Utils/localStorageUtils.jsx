// src/utils/localStorageUtils.js

// Function to store a token
export const storeToken = (token) => {
    localStorage.setItem('token', token);
    console.log('Token stored in localStorage');
  };
  
  // Function to retrieve a token
  export const getToken = () => {
    const token = localStorage.getItem('token');
    console.log('Retrieved token:', token);
    return token;
  };
  
  // Function to remove a token
  export const removeToken = () => {
    localStorage.removeItem('token');
    console.log('Token removed from localStorage');
  };