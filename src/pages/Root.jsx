import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { AuthProvider } from "../security/AuthContext";

export default function Root() {
  return (
    <div className="bg-stone-200">
      <AuthProvider >
        <Header />
        <Outlet />
      </AuthProvider>
    </div>
  )
}
