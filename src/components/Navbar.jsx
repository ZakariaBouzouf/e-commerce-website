import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfilDropDown from "./ProfilDropDown";
import Icons from "./Icons";
import { useCart } from "../context/CartContext";
import { useContext, useState } from "react";
import { SideDrawerShow } from "../pages/Root";

export default function Navbar({ isAuthenticated }) {
  const {  cartQuantity } = useCart()
  const {show,setShow }= useContext(SideDrawerShow)

  function dropdownToggle(){
    setShow(!show)
  }

  return (
    <nav className="w-full bg-stone-50 flex items-center justify-between border-b-2  border-gray-300 ">
      <Link to="/">
        <h1 className="text-4xl m-1 p-2 hover:bg-stone-200 hover:rounded-md">Logo</h1>
      </Link>
      <SearchBar />
      <div className="grid grid-cols-3 space-x-1 mr-2 ">
        <Icons type="cart" onClick={dropdownToggle} >
          <span>Cart (<span className="text-[17px]">{`${cartQuantity}`}</span>)</span>
        </Icons>
        <Icons type="heart" >
          <span>Favorites</span>
        </Icons>
        {isAuthenticated ? <ProfilDropDown /> :
          <Icons type="login">
            <span>Login</span>
          </Icons>
        }
      </div>
    </nav>
  )

}
