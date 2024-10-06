// src/components/BakeryItemDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import localInstance from '../api/localInstance';

function BakeryItemDetail() {
    const { id } = useParams(); // Get the bakery item ID from the URL
    const [bakeryItem, setBakeryItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBakeryItem = async () => {
            try {
                const response = await localInstance.get(`/api/bakery-items/${id}`); // Fetch the bakery item by ID
                setBakeryItem(response.data);
            } catch (error) {
                console.error('Error fetching bakery item:', error);
                setError('Failed to load bakery item.');
            } finally {
                setLoading(false);
            }
        };
        fetchBakeryItem();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!bakeryItem) return <div>Bakery item not found.</div>;

    return (
        <div className="bakery-item-detail">
            <h1>{bakeryItem.name}</h1>
            <img src={bakeryItem.imageUrl} alt={bakeryItem.name} className="bakery-item-image" />
            <p>{bakeryItem.description}</p>
            <p>Price: ${bakeryItem.price.toFixed(2)}</p>
            {/* Add any additional functionality, like adding to cart */}
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    );
}

export default BakeryItemDetail;