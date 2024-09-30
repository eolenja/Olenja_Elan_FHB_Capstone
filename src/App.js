// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import ProductCatalog from './components/ProductCatalog';
// import ProductDetails from './components/ProductDetails';
// import ShoppingCart from './components/ShoppingCart';
// import Checkout from './components/Checkout';
// import Login from './components/Login';
// import Register from './components/Register';
// import AboutPage from './components/AboutPage.js';
// import NavBar from './components/NavBar'; // Import NavBar
// import { CartProvider } from './CartContext'; // Import CartProvider

// const App = () => {
//   return (
//     <CartProvider> {/* Wrap your app with CartProvider */}
//       <Router>
//         <NavBar /> {/* Add NavBar here */}
//         <div className="container mx-auto">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/products" element={<ProductCatalog />} />
//             <Route path="/products/:id" element={<ProductDetails />} />
//             <Route path="/cart" element={<ShoppingCart />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/admin" element={<AboutPage />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import NavBar from './NavBar';
// import Routes from './routes';

// const App = () => (
//   <Router>
//     <NavBar />
//     <Routes />
//   </Router>
// );

// export default App;
// App.js
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import NavBar from './NavBar';
// import AppRoutes from './routes';

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <AppRoutes />
//     </Router>
//   );
// }

// export default App;


// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
}

export default App;
