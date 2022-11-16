import { Link } from "react-router-dom";

export default function NavbarWindow() {
  return (
    <nav className="navbarFullscreen">
      <div className="d-flex flex-column flex-md-row">
        <Link to="/" className="p-2 flex-fill border-0">
          HOME
        </Link>
        <Link to="/products" className="p-2 flex-fill border-0">
          ALL PRODUCTS
        </Link>
        <a href="#form" className="link-color p-2 flex-fill border-0">
          CONTACT
        </a>
      </div>
    </nav>
  );
}
