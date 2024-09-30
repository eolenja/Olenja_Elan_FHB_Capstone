
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = `http://localhost:8080/api/products/${id}`; 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [API_URL]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <img className="w-full h-64 object-cover mb-4" src={product.image} alt={product.name} />
      <p className="text-lg mb-2">{product.description}</p>
      <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
      <h3 className="mt-6 font-semibold">Category:</h3>
      <p>{product.category}</p>
      {}
    </div>
  );
};

export default ProductDetails;


