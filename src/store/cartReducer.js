const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, action.payload] };
      case "UPDATE_CART_ITEM":
        return {
          ...state,
          cart: state.cart.map(item => 
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id),
        };
      // Other cases...
      default:
        return state;
    }
  };
  
  export default cartReducer;
  