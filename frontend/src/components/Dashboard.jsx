import React, { useEffect, useState } from 'react';
import localInstance from '../api/localInstance';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const userResponse = await localInstance.get('/users/me');
        setUser(userResponse.data);
      } catch (error) {
        setError('Unauthorized access. Please log in again.');
        navigate('/login'); // Redirect to login if unauthorized
      }
    };

    fetchDashboardData();
  }, [navigate]);

  return (
    <div>
      {error ? (
        <div>
          <h1>{error}</h1>
        </div>
      ) : (
        <h1>Welcome, {user?.username}!</h1>
      )}
    </div>
  );
};

export default Dashboard;
