

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

