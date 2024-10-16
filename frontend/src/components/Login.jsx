// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import localInstance from '../api/localInstance'; // Axios instance

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await localInstance.post('/users/login', { username, password });
            // No need to store a token if using session-based authentication
            navigate('/dashboard'); // Redirect to dashboard
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            {error && <div>{error}</div>}
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;