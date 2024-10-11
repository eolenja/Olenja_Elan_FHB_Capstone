// import React, { useState, useEffect } from 'react';
// import localInstance from '../api/localInstance';

// function CartPage() {
//     const [cart, setCart] = useState(null);

//     useEffect(() => {
//         fetchCart();
//     }, []);

//     const fetchCart = async () => {
//         try {
//             const response = await localInstance.get('/cart');
//             setCart(response.data);
//         } catch (error) {
//             console.error('Error fetching cart:', error);
//         }
//     };

//     const updateQuantity = async (productId, newQuantity) => {
//         try {
//             await localInstance.put('/cart/update', { productId, quantity: newQuantity });
//             fetchCart(); // Refresh cart after updating
//         } catch (error) {
//             console.error('Error updating cart:', error);
//         }
//     };

//     const removeItem = async (productId) => {
//         try {
//             await localInstance.delete(`/cart/remove/${productId}`);
//             fetchCart(); // Refresh cart after removing item
//         } catch (error) {
//             console.error('Error removing item from cart:', error);
//         }
//     };

//     if (!cart) return <div>Loading cart...</div>;

//     return (
//         <div>
//             <h1>Your Cart</h1>
//             {cart.items.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <>
//                     {cart.items.map(item => (
//                         <div key={item.id}>
//                             <h3>{item.name}</h3>
//                             <p>Price: ${item.price}</p>
//                             <p>
//                                 Quantity: 
//                                 <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
//                                 {item.quantity}
//                                 <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                             </p>
//                             <button onClick={() => removeItem(item.id)}>Remove</button>
//                         </div>
//                     ))}
//                     <h2>Total: ${cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h2>
//                     <button>Proceed to Checkout</button>
//                 </>
//             )}
//         </div>
//     );
// }

// export default CartPage;