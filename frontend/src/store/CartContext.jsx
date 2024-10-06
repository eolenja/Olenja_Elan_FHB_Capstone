import React, { createContext, useContext, useState, useEffect } from 'react';
import localInstance from '../api/localInstance';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const response = await localInstance.get('/cart');
            setCart(response.data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    const addToCart = async (item) => {
        try {
            const response = await localInstance.post('/cart/add', item);
            setCart(response.data);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            const response = await localInstance.post('/cart/remove', { itemId });
            setCart(response.data);
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
