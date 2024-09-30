import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/AuthenticationApiService";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticed] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function login(email, password) {
    const baToken = "Basic " + window.btoa(email + ":" + password);
    try {
      // const response = await executeBasicAuthenticationService(baToken);
      const response = await executeBasicAuthenticationService(email, password);
      console.log("Reponse", response);
      if (response.status === 200) {
        console.log("Success");
        setIsAuthenticed(true);
        setToken(baToken);
        setUserId(response.data.id);
        setMessage(response.data.message);

        //TODO: implement this
        // apiClient.interceptors.request.use((config) => {
        //   config.headers.Authorization = baToken;
        //   return config;
        // });
        navigate("/");
        return true;
      } else {
        setIsAuthenticed(false);
        console.log("Failed");
        return false;
      }
    } catch (error) {
      setIsAuthenticed(false);
      console.log(error);
      return false;
    }
  }
  function logout() {
    navigate("/login");
    setIsAuthenticed(false);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        isAuthenticated,
        logout,
        userId,
        message,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
