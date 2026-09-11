function SectionTitle({ smallTitle, title, text }) {
  return (
    <div className="section-title">

      {smallTitle && (
        <span>{smallTitle}</span>
      )}

      <h2>{title}</h2>

      {text && (
        <p>{text}</p>
      )}

    </div>
  );
}

export default SectionTitle;