export default function NavbarWindow({ setPage }) {
  return (
    <nav className="navbarFullscreen">
      <div className="d-flex flex-column flex-md-row">
        <button
          type="button"
          className="p-2 flex-fill border-0"
          onClick={() => setPage({ path: "Home", index: null })}
        >
          Home
        </button>
        <button
          type="button"
          className="p-2 flex-fill border-0"
          onClick={() => setPage({ path: "Products", index: null })}
        >
          Products
        </button>
        <button
          type="button"
          className="p-2 flex-fill border-0"
          onClick={() => setPage({ path: "Contact", index: null })}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
