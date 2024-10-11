// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import localInstance from '../api/localInstance';

// function Cart() {
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

//     if (!cart) return <div>Loading cart...</div>;

//     const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

//     return (
//         <div>
//             <Link to="/cart">
//                 Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
//             </Link>
//         </div>
//     );
// }

// export default Cart;
