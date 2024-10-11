import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import localInstance from '../api/localInstance';

const Menu = () => {
  const [bakeryItems, setBakeryItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchBakeryItems = async () => {
      try {
        const response = await localInstance.get('/bakery-items');
        setBakeryItems(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false even if there's an error
        console.error('Error fetching bakery items:', error);
      }
    };

    fetchBakeryItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <button onClick={() => window.location.reload()}>Retry</button> {/* Retry button */}
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}> {/* Basic styling */}
      <h1>Bakery Items</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {bakeryItems.map(item => (
          <li key={item.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <Link to={`/bakery-items/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {item.name} - ${item.price.toFixed(2)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;