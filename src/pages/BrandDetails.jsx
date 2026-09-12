import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import brands from "../data/brands";

function BrandDetails() {
  const { id } = useParams();

  const brand = brands.find(
    (item) => item.id === id
  );

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const whatsappNumber =
    "923306235522";


  useEffect(() => {
    setProducts([]);
    setLoading(true);

    if (!brand || !brand.api) {
      setLoading(false);
      return;
    }

    fetch(brand.api)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Products could not load"
          );
        }

        return response.json();
      })

      .then((data) => {
        const officialProducts =
          (data.products || [])
            .slice(0, 10)
            .map((product) => ({
              id: product.id,

              name: product.title,

              image:
                product.images?.[0]?.src ||
                product.image?.src ||
                "",

              handle: product.handle,
            }));

        setProducts(
          officialProducts
        );

        setLoading(false);
      })

      .catch((error) => {
        console.log(error);

        setProducts([]);
        setLoading(false);
      });

  }, [brand]);


  if (!brand) {
    return (
      <section className="section">
        <div className="container center">

          <h1>Brand Not Found</h1>

          <Link
            to="/collections"
            className="btn-gold"
          >
            Back to Collections
          </Link>

        </div>
      </section>
    );
  }


  return (
    <>
      {/* BRAND HEADER */}

      <section className="brand-hero">
        <div className="container">

          <p>
            MEN'S UNSTITCHED FABRICS
          </p>

          <h1>
            {brand.name}
          </h1>

          <span>
            {brand.description}
          </span>

        </div>
      </section>


      {/* BRAND INFO */}

      <section className="section">
        <div className="container brand-info-grid">

          <div className="brand-large-logo">
            {brand.shortName}
          </div>


          <div>
            <p className="small-gold">
              AVAILABLE AT
            </p>

            <h2>
              Farooq Cloth House
            </h2>

            <p className="large-paragraph">
              Explore selected
              {` ${brand.name} `}
              unstitched gents fabric.
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {brand.type}
            </p>

            {brand.officialUrl && (
              <a
                href={brand.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="official-link"
              >
                Official Brand Website ↗
              </a>
            )}
          </div>

        </div>
      </section>


      {/* PRODUCTS */}

      <section className="section soft-bg">
        <div className="container">

          <div className="section-heading">

            <p>
              {brand.shortName} COLLECTION
            </p>

            <h2>
              Unstitched Gents Suits
            </h2>

            <span>
              Select a fabric and contact
              Farooq Cloth House to order.
            </span>

          </div>


          {loading && (
            <div className="loading-box">
              Loading official collection...
            </div>
          )}


          {!loading &&
            products.length > 0 && (

            <div className="products-grid">

              {products.map(
                (product, index) => {

                  const message =
                    `Assalam o Alaikum, ` +
                    `I want to order ${product.name} ` +
                    `from ${brand.name}. ` +
                    `Please send me details.`;

                  return (
                    <article
                      className="product-card"
                      key={product.id}
                    >

                      <div className="product-image">

                        <img
                          src={product.image}
                          alt={product.name}
                        />

                        <span className="product-number">
                          {String(index + 1)
                            .padStart(2, "0")}
                        </span>

                      </div>


                      <div className="product-info">

                        <p>
                          {brand.shortName}
                        </p>

                        <h3>
                          {product.name}
                        </h3>

                        <span>
                          Men's Unstitched
                          Shalwar Kameez Fabric
                        </span>


                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            message
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="order-button"
                        >
                          Order on WhatsApp
                        </a>

                      </div>

                    </article>
                  );
                }
              )}

            </div>
          )}


          {!loading &&
            products.length === 0 && (

            <div className="manual-brand-box">

              <div className="brand-large-logo small-logo">
                {brand.shortName}
              </div>

              <h3>
                {brand.name} Collection
              </h3>

              <p>
                Browse the official
                collection and contact
                Farooq Cloth House for
                available articles.
              </p>

              <div className="manual-actions">

                {brand.collectionUrl && (
                  <a
                    href={
                      brand.collectionUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="btn-dark"
                  >
                    View Official Collection
                  </a>
                )}

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Assalam o Alaikum, please send me available ${brand.name} unstitched suits.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                >
                  Ask on WhatsApp
                </a>

              </div>
            </div>
          )}

        </div>
      </section>


      {/* WHY BUY */}

      <section className="section">
        <div className="container">

          <div className="section-heading">
            <p>FAROOQ CLOTH HOUSE</p>
            <h2>Shop With Confidence</h2>
          </div>

          <div className="quality-grid">

            <div>
              <strong>01</strong>
              <h3>Trusted Brands</h3>
              <p>
                Selected gents fabric
                brands in one place.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Unstitched Fabric</h3>
              <p>
                Fabric for traditional
                men's Shalwar Kameez.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Easy Ordering</h3>
              <p>
                Send product details
                directly through WhatsApp.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CONTACT */}

      <section className="brand-bottom">
        <div className="container brand-bottom-grid">

          <div>
            <p>VISIT FAROOQ CLOTH HOUSE</p>

            <h2>
              Nalka Wali Gali,
              Main Bazar, Lalamusa
            </h2>
          </div>

          <div>
            <p>0300-6235522</p>
            <p>0322-5963722</p>
            <p>11:00 AM – 8:00 PM</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default BrandDetails;