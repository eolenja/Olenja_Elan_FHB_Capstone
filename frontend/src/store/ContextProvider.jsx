import React, { createContext, useReducer, useEffect } from 'react';
import { getProducts, getOrders } from '../api'; // Update import

export const StoreContext = createContext();

const initialState = {
  products: [],
  orders: [], // Update state
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_ORDERS': // Update action
      return { ...state, orders: action.payload };
    case 'ADD_ORDER': // New action
      return { ...state, orders: [...state.orders, action.payload] };
    case 'SET_USER':
      console.log('Setting user:', action.payload);
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case 'LOGOUT':
      console.log('Logging out user');
      localStorage.removeItem('user');
      return { ...state, user: null };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [products, orders] = await Promise.all([
          getProducts(),
          getOrders(), // Update API call
        ]);
        dispatch({ type: 'SET_PRODUCTS', payload: products });
        dispatch({ type: 'SET_ORDERS', payload: orders }); // Update dispatch
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchInitialData();
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
