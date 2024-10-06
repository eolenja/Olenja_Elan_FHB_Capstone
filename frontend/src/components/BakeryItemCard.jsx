import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BakeryItemCard from './BakeryItemCard';

const BakeryItemList = ({ user }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/bakery-items');
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching bakery items');
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const addToCart = async (item) => {
    try {
      await axios.post(`http://localhost:8080/api/bakery-items/cart/add?userId=${user.id}`, item);
      setCart([...cart, item]);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeFromCart = async (item) => {
    try {
      await axios.post(`http://localhost:8080/api/bakery-items/cart/remove?userId=${user.id}`, item);
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Menu Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(item => (
          <BakeryItemCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center">
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button
              onClick={() => removeFromCart(item)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <p className="mt-4 font-bold">
        Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
      </p>
    </div>
  );
};

export default BakeryItemList;
