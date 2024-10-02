import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { CartIcon, HeartIcon, LoginIcon } from "./Icons";
import ProfilDropDown from "./ProfilDropDown";

export default function Navbar({ isAuthenticated, logout }) {
  // const [showDropdown,setShowDropdown] = useState(false)
  //
  // function dropdownToggle(){
  //   setShowDropdown(!showDropdown)
  // }
  //
  return (
    <nav className="bg-stone-200 flex items-center justify-between ">
      <Link to="/">
        <h1 className="text-4xl m-3">Logo</h1>
      </Link>
      <SearchBar />
      <div className="grid grid-cols-3 space-x-3 ">
        <CartIcon />
        <HeartIcon />
        {isAuthenticated ? <ProfilDropDown /> :
          <LoginIcon/>
        }
      </div>
    </nav>
  )

}
