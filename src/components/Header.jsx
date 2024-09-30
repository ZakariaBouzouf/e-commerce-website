import { Link } from "react-router-dom";
import { useAuth } from "../security/AuthContext";
import Navbar from "./Navbar";

export default function Header() {
  const { isAuthenticated, logout } = useAuth()

  return (
  <header>
      <Navbar isAuthenticated={isAuthenticated} logout={logout}/>
    </header>
  )
}
