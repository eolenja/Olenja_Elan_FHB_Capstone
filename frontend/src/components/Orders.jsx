import React, { useEffect, useState } from 'react';
import localInstance from '../api/localInstance';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await localInstance.get('/api/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders: ' + response.statusText);
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <h2>Order #{order.id}</h2>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
