import "./service-example-item.scss";

const ServicesExampleItem = ({ serviceExample }) => {
  const { image, title, par } = serviceExample;

  return (
    <div className="services-example-item">
      <div className="services-example-item__image">{image}</div>
      <div className="services-example-item__body-container">
        <h2>{title}</h2>
        <p>{par}</p>
      </div>
    </div>
  );
};

export default ServicesExampleItem;
