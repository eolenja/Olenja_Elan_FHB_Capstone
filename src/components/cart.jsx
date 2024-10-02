import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { cart, addToCart, removeFromCart } = useCart();

    const handleAddItem = () => {
        const newItem = prompt('Enter item name:');
        if (newItem) {
            addToCart(newItem);
        }
    };

    return (
        <div>
            <h1>Your Cart</h1>
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
