import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();

const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
  }
}

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(product) {
    // console.log("Z", product.id);
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  return (
    <CartContext.Provider
      value={{
        numberItems: state.cartItems.length,
        cartItems: state.cartItems,
        addToCart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
