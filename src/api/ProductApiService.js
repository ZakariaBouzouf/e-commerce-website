import { ProductProvider } from "../context/ProductContext";
import { apiClient } from "./ApiClient";

export function retrievAllProducts() {
  return apiClient.get("/products");
}

export function retrieveSingleProduct(id) {
  return apiClient.get(`/products/${id}`);
}
