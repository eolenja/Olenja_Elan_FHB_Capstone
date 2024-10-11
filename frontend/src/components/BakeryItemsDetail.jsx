import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BakeryItemDetails = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [bakeryItem, setBakeryItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBakeryItem = async () => {
            try {
                const response = await fetch(`/api/bakery-items/${id}`);
                if (!response.ok) {
                    throw new Error('Item not found');
                }
                const data = await response.json();
                setBakeryItem(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBakeryItem();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>{bakeryItem.name}</h1>
            <img src={bakeryItem.imageUrl} alt={bakeryItem.name} />
            <p>{bakeryItem.description}</p>
            <p>Price: ${bakeryItem.price.toFixed(2)}</p>
        </div>
    );
};

export default BakeryItemDetails;