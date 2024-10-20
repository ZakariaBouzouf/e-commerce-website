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
    console.log("Product", product);

    if (state.cartItems.length === 0) {
      console.log("ADD");
      product = { ...product, quantity: 1 };
      dispatch({ type: "ADD_TO_CART", payload: [product] });
      console.log("cart", state.cartItems);
      return;
    }

    let foundProduct = state.cartItems.findIndex(
      (item) => item.id === product.id,
    );

    if (foundProduct !== -1) {
      state.cartItems[foundProduct].quantity =
        state.cartItems[foundProduct].quantity + 1;
    } else {
      product.quantity = 1;
      state.cartItems.push(product);
    }
    dispatch({ type: "ADD_TO_CART", payload: state.cartItems });
    console.log("cart", state.cartItems);
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
