import React, { useEffect, useState } from 'react';
import localInstance from '../api/localInstance';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const userResponse = await localInstance.get('/users/me');
        setUser(userResponse.data);

        const cartResponse = await localInstance.get('/cart');
        setCart(cartResponse.data);

        const ordersResponse = await localInstance.get('/orders');
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized access - redirecting to login');
          navigate('/login'); // Redirect to login if unauthorized
        }
      }
    };

    fetchDashboardData();
  }, [navigate]); // Add navigate to dependencies

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.username}!</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-2">
                {item.name} - Quantity: {item.quantity} - Price: ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Your Past Orders</h2>
        {orders.length === 0 ? (
          <p>You have no past orders.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order.id} className="mb-4">
                <p>Order ID: {order.id}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                <p>Total: ${order.total}</p>
                <ul className="ml-4">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} - Quantity: {item.quantity} - Price: ${item.price}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
