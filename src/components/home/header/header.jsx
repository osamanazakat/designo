import "./header.scss";
import HeroImage from "../../../assets/home/desktop/image-hero-phone.png";
import Button from "../../button/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container header">
      <div className="header_container">
        <div className="header__container-left">
          <h1 className="header__heading">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="header__par">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <div>
            <Link to="/company">
              <Button text="Learn More" className="white" />
            </Link>
          </div>
        </div>
        <div className="header__container-right">
          <img className="header__img" src={HeroImage} alt="Hero-Image" />
        </div>
      </div>
    </header>
  );
}

export default Header;
