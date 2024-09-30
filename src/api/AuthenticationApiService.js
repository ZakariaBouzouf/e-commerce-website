import { apiClient } from "./ApiClient";

export function executeBasicAuthenticationService(email, password) {
  // console.log("Token", token);
  return apiClient.post(`/auth/login`, { email, password });
}
