import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>
          <div className="footer-logo">
            FAROOQ
            <span>CLOTH HOUSE</span>
          </div>

          <p>
            A Brand of Quality & Style
          </p>

          <p>
            Premium men's unstitched
            Shalwar Kameez fabrics.
          </p>
        </div>


        <div>
          <h4>Explore</h4>

          <Link to="/">
            Home
          </Link>

          <Link to="/collections">
            Collections
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>


        <div>
          <h4>Visit Us</h4>

          <p>
            Nalka Wali Gali,
            <br />
            Main Bazar, Lalamusa
          </p>

          <p>
            11:00 AM – 8:00 PM
          </p>
        </div>


        <div>
          <h4>Contact</h4>

          <p>0330-6235522</p>
          <p>0322-5963722</p>

          <a
            href="https://wa.me/923306235522"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Order →
          </a>
        </div>

      </div>


      <div className="footer-bottom">
        Farooq Cloth House —
        A Brand of Quality & Style
      </div>

    </footer>
  );
}

export default Footer;