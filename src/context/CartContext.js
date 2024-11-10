import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();

const initialState = {
  cartItems: [],
  cartQuantity: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: action.payload };
    case "REMOVE_FROM_CART":
      return { ...state, cartItems: action.payload };
    case "UPDATE_ITEM_NUM":
      return { ...state, cartItems: action.payload };
  }
}

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function updateCartQuantity(cart) {
    state.cartQuantity = cart.reduce((acc, cur) => cur?.quantity + acc, 0);
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
    updateCartQuantity(state.cartItems);
    dispatch({ type: "ADD_TO_CART", payload: state.cartItems });
    console.log("cart", state.cartItems);
  }

  function removeFromCart(product) {
    let filtedCart = state.cartItems.filter((item) => item.id !== product.id);
    updateCartQuantity(filtedCart);
    dispatch({ type: "REMOVE_FROM_CART", payload: filtedCart });
  }

  function updateItemNum(itemNum, id) {
    const foundedItem = state.cartItems.find((item) => item.id === id);
    console.log("FF", foundedItem);
    let newCart;
    if (itemNum === 0) {
      newCart = state.cartItems.filter((item) => item.id !== id);
    } else {
      foundedItem.quantity = itemNum;
      newCart = state.cartItems;
    }
    console.log("CART", state.cartItems);
    dispatch({ type: "UPDATE_ITEM_NUM", payload: newCart });
    updateCartQuantity(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartQuantity: state.cartQuantity,
        cartItems: state.cartItems,
        updateItemNum,
        removeFromCart,
        addToCart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
