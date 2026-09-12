import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* LOGO */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <strong>FAROOQ</strong>
          <span>CLOTH HOUSE</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className={`nav-links ${
            menuOpen ? "show-menu" : ""
          }`}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/collections"
            onClick={closeMenu}
          >
            Collections
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          {/* MOBILE ORDER BUTTON */}
          <a
            href="https://wa.me/923006235522"
            target="_blank"
            rel="noreferrer"
            className="mobile-order"
            onClick={closeMenu}
          >
            Order Online
          </a>
        </nav>

        {/* DESKTOP ORDER BUTTON */}
        <a
          href="https://wa.me/923006235522"
          target="_blank"
          rel="noreferrer"
          className="nav-order"
        >
          Order Online
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className={`menu-btn ${
            menuOpen ? "menu-active" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;