import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../store/ContextProvider"; 

function SingleItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const {
    state: { products, cart },
    dispatch
  } = useContext(StoreContext); 


  const product = products.find((p) => p.id === parseInt(id));

 
  const handleAddToCart = () => {
    if (!product) return;

    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      dispatch({ type: "UPDATE_CART_ITEM", payload: { id: product.id, quantity: existingItem.quantity + 1 } });
    } else {
      // If it's a new item, add it to the cart with an initial quantity of 1
      dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
    }
  };

 
  if (!product) {
    return <div className="text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel"
      >
        Back to All Items
      </button>
      <div className="bg-platinum p-6 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-keppel font-bold text-xl mb-4">
          ${product.price.toFixed(2)}
        </p>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleItem;
