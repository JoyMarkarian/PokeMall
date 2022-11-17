import { useState } from "react";
import { Link } from "react-router-dom";

import NavbarWindow from "./Navbar/NavbarWindow";
import Search from "./Search";

import Burger from "../assets/Burger.png";
import Panier from "../assets/panier.png";
import Logo from "../assets/logo.png";

import "./Header.css";

export default function Header({ setPage, search, handleSearch }) {
  const [toggleMenuMobile, settoggleMenuMobile] = useState(false);

  const toggleMenuMobileButton = () => {
    settoggleMenuMobile(!toggleMenuMobile);
  };
  return (
    <header>
      <div className="d-flex align-items-center justify-content-around ">
        <div className="p-2 d-none d-md-block">
          <Link to="/" className="link-navbar p-3 flex-fill border-0">
            <img src={Logo} className="img-fluid w-50 h-50" alt="logo" />
          </Link>
        </div>
        <div className="p-2 d-md-none">
          <button
            type="button"
            className="border-0"
            onClick={toggleMenuMobileButton}
          >
            <img src={Burger} className="img-fluid" alt="burger" />
          </button>
        </div>
        <div className="p-2 d-none d-md-block ">
          <div className="Navbar">
            <NavbarWindow setPage={setPage} />
          </div>
        </div>
        <div className="p-2 text-center">
          <img
            src={Logo}
            className="logo img-fluid w-75 h-75 m-1 d-md-none"
            alt="logo"
          />
          <Search
            search={search}
            handleSearch={handleSearch}
            setPage={setPage}
          />
        </div>
        <div className="p-2 text-center align-middle">
          <Link to="/cart" className="border-0">
            <img
              src={Panier}
              className="basket basket-label img-fluid"
              alt="panier"
            />
            <p className="d-none d-md-block m-0">Cart</p>
          </Link>
        </div>
      </div>
      {toggleMenuMobile && (
        <ul className="navbarMobile d-md-none zindex-modal">
          <li className="navbarMobile bg-primary">
            <div className="Navbar">
              <NavbarWindow setPage={setPage} />
            </div>
          </li>
        </ul>
      )}
    </header>
  );
}
