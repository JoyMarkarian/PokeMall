import "./Header.css";
import { useState } from "react";
import NavbarWindow from "./Navbar/NavbarWindow";
import Burger from "../assets/Burger.png";
import Panier from "../assets/panier.png";
import Logo from "../assets/logo.png";

export default function Header() {
  const [toggleMenuMobile, settoggleMenuMobile] = useState(false);

  const toggleMenuMobileButton = () => {
    settoggleMenuMobile(!toggleMenuMobile);
  };
  return (
    <header>
      <div className="d-flex align-items-center justify-content-around ">
        <div className="p-2 d-none d-md-block">
          <img src={Logo} className="img-fluid" alt="logo" />
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
            <NavbarWindow />
          </div>
        </div>
        <div className="p-2">
          <img src={Logo} className="img-fluid d-md-none" alt="logo" />
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="p-2 text-center">
          <button type="button" className="border-0">
            <img src={Panier} className="img-fluid" alt="panier" />
          </button>
        </div>
      </div>
      {toggleMenuMobile && (
        <ul className="navbarMobile d-md-none zindex-modal">
          <li className="navbarMobile bg-primary">
            <div className="Navbar">
              <NavbarWindow />
            </div>
          </li>
        </ul>
      )}
    </header>
  );
}
