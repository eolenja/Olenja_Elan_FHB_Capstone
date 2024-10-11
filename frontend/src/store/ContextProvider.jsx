import React, { createContext, useReducer, useEffect } from 'react';
import { getProducts, getCartItems } from '../api';

export const StoreContext = createContext();

const initialState = {
  products: [],
  cart: [],
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_CART':
      return { ...state, cart: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'SET_USER':
      console.log('Setting user:', action.payload); // Debugging line
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case 'LOGOUT':
      console.log('Logging out user'); // Debugging line
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
        const [products, cartItems] = await Promise.all([
          getProducts(),
          getCartItems(),
        ]);
        dispatch({ type: 'SET_PRODUCTS', payload: products });
        dispatch({ type: 'SET_CART', payload: cartItems });
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
