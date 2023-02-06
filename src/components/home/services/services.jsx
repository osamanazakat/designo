import "./services.scss";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services">
      <div className="container services__container">
        <Link className="services__container-left" to="/webdesign">
          <div className="services__left-web">
            <h1 className="services__heading">Web Design</h1>
            <p className="services__p">
              View Projects <span className="services__arrow">&gt;</span>
            </p>
          </div>
        </Link>
        <div className="services__container-right">
          <Link className="services__top-app" to="/appdesign">
            <h1 className="services__heading">App Design</h1>
            <p className="services__p">
              View Projects <span className="services__arrow">&gt;</span>
            </p>
          </Link>
          <Link className="services__bottom-graphic" to="graphicdesign">
            <h1 className="services__heading">Graphic Design</h1>
            <p className="services__p">
              View Projects <span className="services__arrow">&gt;</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
