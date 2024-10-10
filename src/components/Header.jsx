import { Link } from "react-router-dom";
import { useAuth } from "../security/AuthContext";
import Navbar from "./Navbar";

export default function Header() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="border-b-2  border-gray-300">
      <Navbar isAuthenticated={isAuthenticated} logout={logout} />
    </header>
  )
}
