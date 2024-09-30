import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar ({isAuthenticated ,logout}) {
  const [showDropdown,setShowDropdown] = useState(false)

  function dropdownToggle(){
    setShowDropdown(!showDropdown)
  }



  return (
  <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" variant="black" aria-label="Twelfth navbar ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul class="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          {!isAuthenticated ?
            (<li className="nav-item">
              <Link to="/login" className="nav-link" >
                Login
              </Link>
            </li> ):
            (
              <li className="nav-item">
                <Link className="nav-link" onClick={logout} to="/login" >
                  logout
                </Link>
              </li>)}
          {isAuthenticated &&
            <li class="nav-item dropdown ">
              <a class={`nav-link dropdown-toggle ${showDropdown ? "show" : ""}`} onClick={dropdownToggle} href="#" data-bs-toggle="dropdown" aria-expanded="true">Profil</a>
              <ul class={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                <li>
                  <Link className="dropdown-item" to="/profil">Profil</Link>
                </li>
                <li><a class="dropdown-item" href="#">Support</a></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )

}
