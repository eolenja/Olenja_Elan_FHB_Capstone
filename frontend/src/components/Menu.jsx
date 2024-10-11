import React, { useState, useEffect } from 'react';
import localInstance from '../api/localInstance';
import axios from 'axios'; // Assuming axios is used for fetching

function Menu() {
  const [bakeryItems, setBakeryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBakeryItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/bakery-items', {
          withCredentials: true,
        });
        if (Array.isArray(response.data)) {
          setBakeryItems(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setError('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching bakery items:', error.message);
        setError('Failed to fetch bakery items');
      } finally {
        setLoading(false);
      }
    };

    fetchBakeryItems();
  }, []);

  const addToCart = async (bakeryItemId) => {
    try {
      const response = await localInstance.post('/cart/add', { bakeryItemId });
      console.log('Item added to cart:', response.data);
      alert('Item added to cart!');
    } catch (err) {
      console.error('Error adding item to cart:', err.response || err);
      alert('Failed to add item to cart: ' + (err.response?.data?.message || err.message));
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="bakery-items">
        {bakeryItems.map(item => (
          <div key={item.id} className="bakery-item">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;