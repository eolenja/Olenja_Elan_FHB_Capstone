import React, { useEffect, useState } from 'react';
import localInstance from '../api/localInstance';

const Menu = () => {
  const [bakeryItems, setBakeryItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBakeryItems = async () => {
      try {
        const response = await localInstance.get('/bakery-items');
        setBakeryItems(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching bakery items:', error);
      }
    };

    fetchBakeryItems();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Bakery Items</h1>
      <ul>
        {bakeryItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;