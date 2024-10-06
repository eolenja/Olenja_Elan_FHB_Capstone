import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import CartPage from './components/CartPage';
import BlogList from './components/BlogList'; // Import BlogList
import BlogDetail from './components/BlogDetail'; // Import BlogDetail
import { CartProvider } from './store/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/blogs" element={<BlogList />} /> {/* Add BlogList route */}
            <Route path="/blogs/:id" element={<BlogDetail />} /> {/* Add BlogDetail route */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;