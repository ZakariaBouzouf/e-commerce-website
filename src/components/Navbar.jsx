import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfilDropDown from "./ProfilDropDown";
import Icons from "./Icons";
import { useCart } from "../context/CartContext";

export default function Navbar({ isAuthenticated, logout }) {
  const { numberItems } = useCart()
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
        <Icons type="cart" >
          <span>Cart (<span className="text-[17px]">{`${numberItems}`}</span>)</span>
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
