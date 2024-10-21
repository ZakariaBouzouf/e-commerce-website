import { createContext, useContext, useEffect, useReducer } from "react";
const CartContext = createContext();

const initialState = {
  cartItems: [],
  numberItems: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: action.payload };
    case "REMOVE_FROM_CART":
      return { ...state, cartItems: action.payload };
  }
}

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function updateTheItemsNum(cart) {
    state.numberItems = cart.reduce((acc, cur) => cur?.quantity + acc, 0);
  }

  function addToCart(product) {
    console.log("Product", product);

    let foundProduct = state.cartItems?.findIndex(
      (item) => item.id === product.id,
    );

    if (foundProduct !== -1) {
      state.cartItems[foundProduct].quantity =
        state.cartItems[foundProduct].quantity + 1;
    } else {
      product.quantity = 1;
      state.cartItems.push(product);
    }
    updateTheItemsNum(state.cartItems);
    dispatch({ type: "ADD_TO_CART", payload: state.cartItems });
    console.log("cart", state.cartItems);
  }

  function removeFromCart(product) {
    let filtedCart = state.cartItems.filter((item) => item.id !== product.id);
    updateTheItemsNum(filtedCart);
    dispatch({ type: "REMOVE_FROM_CART", payload: filtedCart });
  }

  return (
    <CartContext.Provider
      value={{
        numberItems: state.numberItems,
        cartItems: state.cartItems,
        removeFromCart,
        addToCart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
