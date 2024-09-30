// // src/routes.js
// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import HomePage from './HomePage';
// import ProductCatalog from './ProductCatalog';
// import ProductDetails from './ProductDetails';
// import AboutPage from './AboutPage';
// import ShoppingCart from './ShoppingCart';

// const Routes = () => (
//   <Switch>
//     <Route path="/" exact component={HomePage} />
//     <Route path="/products" exact component={ProductCatalog} />
//     <Route path="/products/:id" component={ProductDetails} />
//     <Route path="/about" component={AboutPage} />
//     <Route path="/cart" component={ShoppingCart} />
//   </Switch>
// );

// export default Routes;
// routes.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './HomePage';
// import ProductCatalog from './ProductCatalog';
// import ProductDetails from './ProductDetails';
// import SingleItem from './SingleItem';
// import AboutPage from './AboutPage';
// import ShoppingCart from './ShoppingCart';
// import Checkout from './Checkout';
// import Login from './Login';
// import Register from './Register';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/products" element={<ProductCatalog />} />
//       <Route path="/products/:id" element={<ProductDetails />} />
//       <Route path="/product/:id" element={<SingleItem />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/cart" element={<ShoppingCart />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       {/* Add more routes as necessary */}
//     </Routes>
//   );
// };

// export default AppRoutes;

// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductCatalog from './components/ProductCatalog';
import ProductDetails from './components/ProductDetails';
import SingleItem from './components/SingleItem';
import AboutPage from './components/AboutPage';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';


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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Add more routes as necessary */}
    </Routes>
  );
};

export default AppRoutes;
