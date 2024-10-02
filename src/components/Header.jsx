import { Link } from "react-router-dom";
import { useAuth } from "../security/AuthContext";
import Navbar from "./Navbar";

export default function Header() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="border-b-4  border-stone-500">
      <Navbar isAuthenticated={isAuthenticated} logout={logout} />
    </header>
  )
}
