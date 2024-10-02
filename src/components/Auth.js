

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();
        const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';

        try {
            const response = await axios.post(`http://localhost:8080${endpoint}`, { username, password });
            setMessage(isRegistering ? 'Registration successful! Logging in...' : 'Login successful!');
            localStorage.setItem('user', JSON.stringify(response.data)); 

            setTimeout(() => {
                navigate('/cart'); 
            }, 2000);
        } catch (error) {
            setMessage(isRegistering ? 'Registration failed.' : 'Login failed. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">{isRegistering ? 'Register' : 'Login'}</h2>
                <form onSubmit={handleAuth}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-200"
                    >
                        {isRegistering ? 'Register' : 'Login'}
                    </button>
                </form>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                <p className="mt-4 text-center">
                    {isRegistering 
                        ? 'Already have an account? ' 
                        : "Don't have an account? "
                    }
                    <button 
                        onClick={() => setIsRegistering(!isRegistering)} 
                        className="text-pink-500 hover:underline"
                    >
                        {isRegistering ? 'Login' : 'Register'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Auth;
