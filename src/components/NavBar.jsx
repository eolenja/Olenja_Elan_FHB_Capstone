import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Bakery</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link to="/menu" className="text-white hover:text-gray-200">Menu</Link></li>
          <li><Link to="/login" className="text-white hover:text-gray-200">Login</Link></li>
          <li><Link to="/register" className="text-white hover:text-gray-200">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;