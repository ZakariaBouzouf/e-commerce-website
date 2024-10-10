import { createContext, useContext, useEffect, useReducer } from "react";
import {
  retrievAllProducts,
  retrieveSingleProduct,
} from "../api/ProductApiService";

const ProductContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
  currentProduct: {},
};

function productReducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "products/loaded":
      return { ...state, isLoading: false, products: action.payload };
    case "product/loaded":
      return { ...state, isLoading: false, currentProduct: action.payload };
    case "rejected":
      return {
        ...state,
        messageError: action.payload,
      };
  }
}

export const useProduct = () => useContext(ProductContext);

export function ProductProvider({ children }) {
  const [{ products, isLoading, currentProduct }, dispatch] = useReducer(
    productReducer,
    initialState,
  );

  useEffect(() => {
    async function retrieveProducts() {
      dispatch({ type: "loading" });
      try {
        const response = await retrievAllProducts();
        dispatch({ type: "products/loaded", payload: response.data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data",
        });
      }
    }
    retrieveProducts();
  }, []);

  async function getProduct(id) {
    if (id === currentProduct.id) return;

    dispatch({ type: "loading" });
    try {
      const response = await retrieveSingleProduct(id);
      dispatch({ type: "product/loaded", payload: response.data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  return (
    <ProductContext.Provider
      value={{
        getProduct,
        products,
        isLoading,
        currentProduct,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
