import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import Orders from './components/Orders'; // Import Orders component
import { OrdersProvider } from './store/OrdersProvider'; // Correct import path
import BakeryItemDetails from './components/BakeryItemsDetail'; // Ensure the path and name are correct

function App() {
  return (
    <OrdersProvider> {/* Use OrdersProvider instead of CartProvider */}
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} /> {/* Update route */}
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/bakery-items/:id" element={<BakeryItemDetails />} />
          </Routes>
        </div>
      </Router>
    </OrdersProvider>
  );
}

export default App;