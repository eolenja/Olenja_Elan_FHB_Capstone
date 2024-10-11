import React, { useEffect, useState } from 'react';
import localInstance from '../api/localInstance';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../Utils/localStorageUtils';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = getToken();
      if (!token) {
        setError('You are not logged in. Please log in to access your dashboard.');
        return;
      }

      try {
        const userResponse = await localInstance.get('/users/me');
        setUser(userResponse.data);
      } catch (error) {
        setError('Unauthorized access. Please log in again.');
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to login if the user wants to log in
  };

  return (
    <div>
      {error ? (
        <div>
          <h1>{error}</h1>
          <button onClick={handleLoginRedirect}>Go to Login</button>
        </div>
      ) : (
        <h1>Welcome, {user?.username}!</h1>
      )}
    </div>
  );
};

export default Dashboard;
