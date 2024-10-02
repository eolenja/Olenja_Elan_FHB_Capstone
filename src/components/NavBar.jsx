import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="bg-pink-300 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">For Heavens Bake!</Link>
      <div>
        <Link to="/products" className="mx-2 hover:text-gray-300">Products</Link>
        <Link to="/blog" className="mx-2 hover:text-gray-300">Blog</Link> 
        <Link to="/cart" className="mx-2 hover:text-gray-300">Cart</Link>
        <Link to="/auth" className="mx-2 hover:text-gray-300">Login/Register</Link> 
        <Link to="/about" className="mx-2 hover:text-gray-300">About</Link> 
      </div>
    </div>
  </nav>
);

export default NavBar;
