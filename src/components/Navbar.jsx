import {
  NavLink,
  Link,
} from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container nav-inner">

        <Link
          to="/"
          className="logo"
        >
          <strong>FAROOQ</strong>
          <span>CLOTH HOUSE</span>
        </Link>


        <nav className="nav-links">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/collections">
            Collections
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>


        <a
          href="https://wa.me/923306235522"
          target="_blank"
          rel="noreferrer"
          className="nav-order"
        >
          Order Online
        </a>

      </div>

    </header>
  );
}

export default Navbar;