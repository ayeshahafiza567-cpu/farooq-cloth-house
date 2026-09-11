import { Link } from "react-router-dom";

function BrandCard({ brand }) {
  return (
    <article className="brand-card">
      <Link to={`/brands/${brand.id}`} className="brand-card-link">
        <div className="brand-logo-box">
          <span>{brand.shortName}</span>
        </div>

        <div className="brand-card-content">
          <p className="gold-text">{brand.type}</p>

          <h3>{brand.name}</h3>

          <p>{brand.description}</p>

          <span className="explore-link">
            Explore Collection →
          </span>
        </div>
      </Link>
    </article>
  );
}

export default BrandCard;