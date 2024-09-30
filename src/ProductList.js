import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchProducts();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}: ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
