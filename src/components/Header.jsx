import { useAuth } from "../security/AuthContext";
import Navbar from "./Navbar";

export default function Header() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="sticky top-0 left-0 w-screen z-30">
      <Navbar isAuthenticated={isAuthenticated} logout={logout} />
    </header>
  )
}
