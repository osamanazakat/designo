import "./company-sections.scss";

const CompanySections = ({ heading, desc1, desc2, image, className }) => {
  return (
    <section className={`company-sections ${className}`}>
      <div className="company-sections__container container">
        <div className="company-sections__text-container">
          <h1 className="company-sections__heading">{heading}</h1>
          <div className="company-sections__p-container">
            <p className="company-sections__p">{desc1}</p>
            <br />
            <p className="company-sections__p">{desc2}</p>
          </div>
        </div>
        <div className="company-sections__img-container">
          <img src={image} alt="" className="company-section__img" />
        </div>
      </div>
    </section>
  );
};

export default CompanySections;
