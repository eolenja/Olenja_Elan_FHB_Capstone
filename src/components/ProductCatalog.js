// import React, { useEffect, useState } from 'react';

// const ProductCatalog = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true); // Loading state

//   const API_URL = 'http://localhost:8080/api/products'; // Update with your backend URL
//   const CART_ID = 1; // Example Cart ID; replace this with your logic to get the current cart ID

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleAddToCart = async (productId) => {
//     const cartItem = {
//       productId: productId,
//       quantity: 1, // Set quantity as needed
//     };

//     try {
//       const response = await fetch(`http://localhost:8080/api/cart/${CART_ID}/items`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(cartItem),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add item to cart');
//       }

//       // Optionally, handle successful addition (e.g., show a message)
//       alert('Item added to cart!');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-semibold mb-4">Product Catalog</h2>
//       {loading && <p>Loading products...</p>}
//       {error && <div className="text-red-500">{error}</div>}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map(product => (
//           <div key={product.id} className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200">
//             <img className="w-full h-48 object-cover mb-2 rounded" src={product.image} alt={product.name} />
//             <h3 className="text-xl font-bold">{product.name}</h3>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
//             <button 
//               onClick={() => handleAddToCart(product.id)} 
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCatalog;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = 'http://localhost:8080/api/products';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg shadow-lg p-4">
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="font-bold text-xl mb-4">${product.price.toFixed(2)}</p>
          </Link>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;

