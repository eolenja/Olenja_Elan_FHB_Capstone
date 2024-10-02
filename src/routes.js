import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductCatalog from './components/ProductCatalog';
import ProductDetails from './components/ProductDetails';
import SingleItem from './components/SingleItem';
import AboutPage from './components/AboutPage';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Auth from './components/Auth'; // Import the combined Auth component
import Blog from './components/Blog'; // Import the Blog component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductCatalog />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/product/:id" element={<SingleItem />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/auth" element={<Auth />} /> {/* Route for authentication */}
      <Route path="/blog" element={<Blog />} /> {/* Add the Blog route */}
      {/* Add more routes as necessary */}
    </Routes>
  );
};

export default AppRoutes;
