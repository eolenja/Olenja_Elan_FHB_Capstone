import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [bakeryItems, setBakeryItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBakeryItems = async () => {
      try {
        const response = await fetch('/api/bakery-items');
        if (!response.ok) {
          throw new Error('Failed to fetch bakery items: ' + response.statusText);
        }
        const data = await response.json();
        setBakeryItems(data);
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
      <h1>Menu</h1>
      <ul>
        {bakeryItems.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;