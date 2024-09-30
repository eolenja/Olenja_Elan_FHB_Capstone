// ShoppingCart.js
import React, { useEffect, useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const API_URL = 'http://localhost:8080/api/cart';

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = (id) => {
   
  };

  if (loading) return <p>Loading cart items...</p>; // Loading state
  if (error) return <div className="text-red-500">{error}</div>; // Display error if any

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
      <div className="border-t mt-4 pt-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <h3 className="text-lg font-bold">{item.productName}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <div className="border-t mt-4 pt-4">
          <p className="text-lg font-bold">Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
