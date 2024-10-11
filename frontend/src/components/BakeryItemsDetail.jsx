import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import localInstance from '../api/localInstance'; // Import localInstance

const BakeryItemDetails = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [bakeryItem, setBakeryItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBakeryItem = async () => {
            try {
                const response = await localInstance.get(`/bakery-items/${id}`); // Use localInstance
                const data = response.data;
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