import localInstance from './localInstance';

export const getProducts = async () => {
    try {
        const response = await localInstance.get('/bakery-items');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
};

export const getOrders = async () => {
    try {
        const response = await localInstance.get('/orders');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch orders:', error);
        throw error;
    }
};
