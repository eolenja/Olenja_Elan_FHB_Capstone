import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await fetch('/api/users/logout', {
            method: 'POST',
            credentials: 'include', // Include cookies in the request
        });
        navigate('/login'); // Redirect to login page
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
