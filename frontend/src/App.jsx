import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
// import CartPage from './components/CartPage';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import { CartProvider } from './store/CartContext';
import Cart from './components/Cart';

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
            <Route path="/cart" element={<Cart />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;