import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import localInstance from '../api/localInstance';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await localInstance.post('/auth/login', {
        username: username,
        password: password
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/menu');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <div style={{color: 'red'}}>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;