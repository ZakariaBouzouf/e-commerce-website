import { apiClient } from "./ApiClient";

export function retrievAllProducts() {
  return apiClient.get("/products");
}
