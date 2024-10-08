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
      const response = await localInstance.post('users/login', {
        username: username,
        password: password
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: '400px', margin: '50px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
        style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
      />
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
      />
      {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
      <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s' }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
      >
        Login
      </button>
    </form>
  );
}

export default Login;