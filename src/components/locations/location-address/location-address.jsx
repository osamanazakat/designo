import "./location-address.scss";

const LocationAddress = ({ address, heading, phone, email, image, office }) => {
  return (
    <section className="location-address">
      <div className="location-address__container container">
        <div className="location-address__left">
          <h1 className="location-address__heading">{heading}</h1>
          <div className="location-address__text-container">
            <div className="location-address__text-container-left">
              <h2>{office}</h2>
              <p>{address}</p>
            </div>
            <div className="location-address__text-container-right">
              <h2>Contact</h2>
              <p>P: {phone}</p>
              <p>M: {email}</p>
            </div>
          </div>
        </div>
        <div className="location-address__right">
          <img src={image} alt="" className="location-address__img" />
        </div>
      </div>
    </section>
  );
};

export default LocationAddress;
