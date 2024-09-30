import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="bg-pink-300 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">For Heavens Bake!</Link>
      <div>
        <Link to="/products" className="mx-2 hover:text-gray-300">Products</Link>
        <Link to="/cart" className="mx-2 hover:text-gray-300">Cart</Link>
        <Link to="/login" className="mx-2 hover:text-gray-300">Login</Link>
        <Link to="/register" className="mx-2 hover:text-gray-300">Register</Link>
        <Link to="/about" className="mx-2 hover:text-gray-300">About</Link> {/* Updated link */}
      </div>
    </div>
  </nav>
);

export default NavBar;
