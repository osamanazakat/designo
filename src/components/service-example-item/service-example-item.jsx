import "./service-example-item.scss";

const ServicesExampleItem = ({ serviceExample }) => {
  const { image, title, par, id } = serviceExample;

  return (
    <div className="services-example-item" key={id}>
      <div className="services-example-item__image">{image}</div>
      <div className="services-example-item__body-container">
        <h2 className="services-example-item__heading">{title}</h2>
        <p className="services-example-item__par">{par}</p>
      </div>
    </div>
  );
};

export default ServicesExampleItem;
