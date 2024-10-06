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

  return (
    <CartContext.Provider
      value={{
        numberItems: state.cartItems.length,
        cartItems: state.cartItems,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
