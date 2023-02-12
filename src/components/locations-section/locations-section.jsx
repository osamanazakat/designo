import Button from "../button/button";
import { Link } from "react-router-dom";
import Img1 from "../../assets/shared/desktop/illustration-canada.svg";
import Img2 from "../../assets/shared/desktop/illustration-australia.svg";
import Img3 from "../../assets/shared/desktop/illustration-united-kingdom.svg";

import "./locations-section.scss";

const LocationsSection = () => {
  const locations = [
    {
      id: 1,
      title: "CANADA",
      img: Img1,
    },
    {
      id: 2,
      title: "AUSTRALIA",
      img: Img2,
    },
    {
      id: 3,
      title: "UNITED KINGDOM",
      img: Img3,
    },
  ];

  return (
    <section className="locations-section">
      <div className="container locations-section__container">
        {locations.map(({ id, title, img }) => {
          return (
            <div key={id} className="locations-section__feature">
              <div className="locations-section__img-container">
                <img className="locations-section__img" src={img} />
              </div>
              <h2 className="locations-section__title">{title}</h2>
              <Link to="/locations">
                <Button className="red" text="see location" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LocationsSection;
