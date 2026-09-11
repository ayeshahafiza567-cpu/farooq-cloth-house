import { Link } from "react-router-dom";
import brands from "../data/brands";
import BrandCard from "../components/BrandCard";

function Home() {
  const whatsappNumber = "923306235522";

  return (
    <>
      {/* HERO */}

      <section className="home-hero">
        <div className="container home-hero-grid">

          <div className="hero-text">
            <p className="small-gold">
              PREMIUM MEN'S UNSTITCHED FABRICS
            </p>

            <h1>
              Farooq
              <span> Cloth House</span>
            </h1>

            <h2>A Brand of Quality & Style</h2>

            <p className="hero-description">
              Discover premium unstitched fabric for
              men's Shalwar Kameez from trusted
              Pakistani fabric brands.
            </p>

            <div className="hero-buttons">
              <Link
                to="/collections"
                className="btn-gold"
              >
                Shop Collections
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Assalam o Alaikum, I want to order a gents unstitched suit from Farooq Cloth House."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Order Online
              </a>
            </div>
          </div>


          <div className="shop-photo-wrap">
            <img
             
  src="/image.png"
  alt="Farooq Cloth House"
  className="shop-photo"
/>

            <div className="photo-label">
              <strong>Farooq Cloth House</strong>
              <span>Main Bazar, Lalamusa</span>
            </div>
          </div>

        </div>
      </section>


      {/* TRUST BAR */}

      <section className="trust-bar">
        <div className="container trust-grid">

          <div>
            <strong>Premium</strong>
            <span>Quality Fabrics</span>
          </div>

          <div>
            <strong>Trusted</strong>
            <span>Fabric Brands</span>
          </div>

          <div>
            <strong>Online</strong>
            <span>WhatsApp Orders</span>
          </div>

          <div>
            <strong>Lalamusa</strong>
            <span>Main Bazar</span>
          </div>

        </div>
      </section>


      {/* SEASON */}

      <section className="section">
        <div className="container">

          <div className="section-heading">
            <p>SHOP BY SEASON</p>
            <h2>For Every Season</h2>
          </div>

          <div className="season-grid">

            <div className="season-box summer-box">
              <div>
                <span>SUMMER</span>
                <h3>Summer Collection</h3>

                <p>
                  Cotton, Latha and lightweight
                  Wash & Wear for warm weather.
                </p>

                <Link to="/collections">
                  Explore Summer →
                </Link>
              </div>
            </div>


            <div className="season-box winter-box">
              <div>
                <span>WINTER</span>
                <h3>Winter Collection</h3>

                <p>
                  Rich fabrics, elegant shades and
                  comfortable winter suiting.
                </p>

                <Link to="/collections">
                  Explore Winter →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* BRANDS */}

      <section className="section soft-bg">
        <div className="container">

          <div className="section-heading">
            <p>OUR BRANDS</p>
            <h2>Trusted Fabric Brands</h2>

            <span>
              Select a brand to explore its collection.
            </span>
          </div>

          <div className="brand-grid">
            {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                brand={brand}
              />
            ))}
          </div>

        </div>
      </section>


      {/* ABOUT */}

      <section className="section">
        <div className="container about-home">

          <div>
            <p className="small-gold">
              FAROOQ CLOTH HOUSE
            </p>

            <h2>
              Premium Fabric.
              <br />
              Traditional Style.
            </h2>
          </div>

          <div>
            <p>
              We offer men's unstitched fabrics
              for Shalwar Kameez from trusted
              brands with options for summer,
              winter, everyday and formal wear.
            </p>

            <Link to="/about" className="text-button">
              Our Story →
            </Link>
          </div>

        </div>
      </section>


      {/* ORDER */}

      <section className="online-order-section">
        <div className="container order-content">

          <p>ONLINE ORDER</p>

          <h2>
            Like a Fabric?
            <br />
            Order on WhatsApp.
          </h2>

          <span>
            Send us the product or brand name and
            our store will assist you.
          </span>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Assalam o Alaikum, I want to place an online order from Farooq Cloth House."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            WhatsApp Order
          </a>

        </div>
      </section>


      {/* VISIT */}

      <section className="section visit-home">
        <div className="container visit-grid">

          <div>
            <p className="small-gold">
              VISIT OUR STORE
            </p>

            <h2>Farooq Cloth House</h2>

            <p>
              Nalka Wali Gali,
              Main Bazar, Lalamusa
            </p>
          </div>


          <div className="store-info">
            <p>
              <strong>Opening Hours</strong>
              11:00 AM – 8:00 PM
            </p>

            <p>
              <strong>Phone</strong>
              0330-6235522
            </p>

            <p>
              <strong>Phone</strong>
              0322-5963722
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;