import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { AuthProvider } from "../security/AuthContext";
import SideDrawer from "../components/SideDrawer";
import BackDrop from "../components/BackDrop";
import { createContext, useState } from "react";
import { useCart } from "../context/CartContext";
import MiniProduct from "../components/MiniProduct";

export const SideDrawerShow = createContext(true)

export default function Root() {
  const [show,setShow]=useState(false)
  const {cartItems} = useCart()
  return (
    <div className="bg-stone-50 h-svh">
      <AuthProvider >
        <SideDrawerShow.Provider value={{show,setShow}} >
          <Header />
          <BackDrop show={show}/>
          <SideDrawer show={show}>{cartItems.map(item => <MiniProduct product={item} key={item.id}/> )}</SideDrawer>
          <Outlet />
        </SideDrawerShow.Provider>
      </AuthProvider>
    </div>
  )
}
