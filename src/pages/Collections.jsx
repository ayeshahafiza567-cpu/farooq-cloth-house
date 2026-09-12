import { useState } from "react";
import brands from "../data/brands";
import BrandCard from "../components/BrandCard";

function Collections() {
  const [search, setSearch] = useState("");

  const filteredBrands = brands.filter((brand) =>
    brand.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <section className="page-top">
        <div className="container">
          <p>FAROOQ CLOTH HOUSE</p>

          <h1>Our Collections</h1>

          <span>
            Premium men's unstitched
            Shalwar Kameez fabrics.
          </span>
        </div>
      </section>


      <section className="section">
        <div className="container">

          <div className="collection-search">

            <div>
              <p className="small-gold">
                FIND YOUR BRAND
              </p>

              <h2>
                Choose Your Fabric
              </h2>
            </div>

            <input
              type="text"
              placeholder="Search Grace, JNG, ASCO..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <div className="brand-grid">
            {filteredBrands.map((brand) => (
              <BrandCard
                key={brand.id}
                brand={brand}
              />
            ))}
          </div>

        </div>
      </section>


      <section className="section soft-bg">
        <div className="container">

          <div className="section-heading">
            <p>FABRIC TYPES</p>
            <h2>Made for Your Style</h2>
          </div>

          <div className="fabric-types">

            <article>
              <span>01</span>
              <h3>Cotton</h3>
              <p>
                Comfortable and breathable
                fabric for Shalwar Kameez.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Wash & Wear</h3>
              <p>
                Smart and easy-care fabric
                for everyday use.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Latha</h3>
              <p>
                Traditional crisp fabric
                with an elegant finish.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Winter Fabric</h3>
              <p>
                Rich seasonal fabric for
                cooler weather.
              </p>
            </article>

          </div>
        </div>
      </section>


      <section className="order-mini">
        <div className="container">
          <h2>Need help choosing a suit?</h2>

          <a
            href="https://wa.me/923006235522"
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}

export default Collections;