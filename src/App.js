import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles.css';
import { StoreProvider } from './store/ContextProvider'; 
import AppRoutes from './routes';
import Auth from './components/Auth'; 

function App() {
  return (
    <StoreProvider>
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </StoreProvider>
  );
}

export default App;

