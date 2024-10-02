import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store/ContextProvider'; 

const ProductCatalog = () => {
  const { state, dispatch } = useContext(StoreContext); 
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
      
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;


  const products = state.products || []; 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map(product => (
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
            <button
              onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })} 
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductCatalog;
