import { apiClient } from "./ApiClient";

export function retrieveUserDetails(id, token) {
  return apiClient.get(`/users/${id}`, {
    headers: {
      Authorization: token,
    },
  });
}
