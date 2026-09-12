import SectionTitle from "../components/SectionTitle";
import brands from "../data/brands";

function About() {
  return (
    <>

      {/* Section 1 - About Hero */}
      <section className="page-hero">
        <div className="container">

          <p className="eyebrow">
            ABOUT US
          </p>

          <h1>Farooq Cloth House</h1>

          <p>
            A Brand of Quality & Style
          </p>

        </div>
      </section>


      {/* Section 2 - Who We Are */}
      <section className="section">
        <div className="container split">

          <div>
            <SectionTitle
              smallTitle="WHO WE ARE"
              title="A Local Store for Men's Fabrics"
            />
          </div>

          <div>
            <p className="big-copy">
              Farooq Cloth House provides quality
              gents fabric from different trusted
              brands in Main Bazar, Lalamusa.
            </p>
          </div>

        </div>
      </section>


      {/* Section 3 - Our Values */}
      <section className="section light">
        <div className="container">

          <SectionTitle
            smallTitle="OUR VALUES"
            title="What Matters to Us"
          />

          <div className="three-cards">

            <div className="info-card">
              <strong>Quality</strong>

              <p>
                Carefully selected gents fabric
                for style and comfort.
              </p>
            </div>


            <div className="info-card">
              <strong>Choice</strong>

              <p>
                Different brands, colours
                and fabric types.
              </p>
            </div>


            <div className="info-card">
              <strong>Service</strong>

              <p>
                Helpful guidance for customers
                when choosing their fabric.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Section 4 - Our Brands */}
      <section className="section dark">
        <div className="container">

          <SectionTitle
            smallTitle="OUR BRANDS"
            title="Brands Available at Farooq Cloth House"
          />

          <div className="brand-name-row">

            {brands.map((brand) => (
              <span key={brand.id}>
                {brand.name}
              </span>
            ))}

          </div>

        </div>
      </section>


      {/* Section 5 - Our Promise */}
      <section className="section">
        <div className="container">

          <SectionTitle
            smallTitle="OUR PROMISE"
            title="Quality & Style"
          />

          <p className="big-copy">
            Our goal is to provide stylish
            gents fabric and a simple shopping
            experience for every customer.
          </p>

        </div>
      </section>


      {/* Section 6 - Visit Us */}
      <section className="section visit-strip">
        <div className="container center">

          <p className="eyebrow">
            VISIT US
          </p>

          <h2>
            Nalka Wali Gali, Main Bazar, Lalamusa
          </h2>

          <p>
            Opening Hours: 11:00 AM to 8:00 PM
          </p>

          <p>
            0300-6235522
          </p>

          <p>
            0322-5963722
          </p>

        </div>
      </section>

    </>
  );
}

export default About;