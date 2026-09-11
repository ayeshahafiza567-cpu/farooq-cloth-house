import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

function Contact() {

  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();

    setSent(true);
  };

  return (
    <>

      {/* Section 1 */}

      <section className="page-hero">

        <div className="container">

          <p className="eyebrow">
            CONTACT US
          </p>

          <h1>
            Visit or Call
            Farooq Cloth House
          </h1>

          <p>
            Contact us for brand
            and fabric availability.
          </p>

        </div>

      </section>


      {/* Section 2 */}

      <section className="section">

        <div className="container">

          <SectionTitle
            smallTitle="CONTACT DETAILS"
            title="Get in Touch"
          />

          <div className="three-cards">

            <div className="info-card">

              <strong>
                Phone 1
              </strong>

              <p>
                0330-6235522
              </p>

            </div>

            <div className="info-card">

              <strong>
                Phone 2
              </strong>

              <p>
                0322-5963722
              </p>

            </div>

            <div className="info-card">

              <strong>
                Address
              </strong>

              <p>
                Nalka Wali Gali,
                Main Bazar,
                Lalamusa
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Section 3 */}

      <section className="section light">

        <div className="container split">

          <div>

            <SectionTitle
              smallTitle="STORE HOURS"
              title="Plan Your Visit"
            />

            <p className="big-copy">

              11:00 AM to 8:00 PM

            </p>

          </div>

          <div className="hours-box">

            <p>

              Visit the shop to
              see fabric colours,
              quality and texture
              in person.

            </p>

          </div>

        </div>

      </section>


      {/* Section 4 */}

      <section className="section dark">

        <div className="container">

          <SectionTitle
            smallTitle="LOCATION"
            title="Main Bazar, Lalamusa"
          />

          <div className="map-placeholder">

            <div>

              <strong>
                Farooq Cloth House
              </strong>

              <p>
                Nalka Wali Gali,
                Main Bazar,
                Lalamusa
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Section 5 */}

      <section className="section">

        <div className="container form-wrap">

          <SectionTitle
            smallTitle="QUICK MESSAGE"
            title="Send an Enquiry"
            text="This form uses React useState."
          />

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Your name"
              required
            />

            <input
              type="text"
              placeholder="Phone number"
              required
            />

            <select defaultValue="">

              <option
                value=""
                disabled
              >
                Select Brand
              </option>

              <option>
                Grace
              </option>

              <option>
                Narkin's
              </option>

              <option>
                Ahmad Fabrics International
              </option>

              <option>
                ASCO Fabrics
              </option>

              <option>
                Zain G
              </option>

              <option>
                JNG
              </option>

              <option>
                HB
              </option>

            </select>

            <textarea
              rows="5"
              placeholder="Your message"
              required
            ></textarea>

            <button
              type="submit"
              className="btn primary"
            >
              Send Message
            </button>

          </form>

          {sent && (

            <p className="success">

              Message submitted successfully.

            </p>

          )}

        </div>

      </section>


      {/* Section 6 */}

      <section className="section visit-strip">

        <div className="container center">

          <p className="eyebrow">
            FAROOQ CLOTH HOUSE
          </p>

          <h2>
            A Brand of Quality & Style
          </h2>

          <p>
            Gents Suits • Trusted Brands • Lalamusa
          </p>

        </div>

      </section>

    </>
  );
}

export default Contact;