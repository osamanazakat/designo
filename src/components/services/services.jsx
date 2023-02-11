import "./services.scss";
import { Link } from "react-router-dom";

const Services = ({ selectedService }) => {
  const Links = [
    {
      id: "webDesign",
      text: (
        <div className="services__web-design">
          <h1 className="services__heading">Web Design</h1>
          <p className="services__p">
            View Projects <span className="services__arrow">></span>
          </p>
        </div>
      ),
      url: "/webdesign",
    },
    {
      id: "appDesign",
      text: (
        <div className="services__app-design">
          <h1 className="services__heading">App Design</h1>
          <p className="services__p">
            View Projects <span className="services__arrow">></span>
          </p>
        </div>
      ),
      url: "/appdesign",
    },
    {
      id: "graphicDesign",
      text: (
        <div className="services__graphic-design">
          <h1 className="services__heading">Graphic Design</h1>
          <p className="services__p">
            View Projects <span className="services__arrow">></span>
          </p>
        </div>
      ),
      url: "/graphicdesign",
    },
  ];

  return (
    <section className="services">
      <div className="container services__container">
        {selectedService === "home" &&
          Links.map(({ id, text, url }) => (
            <Link key={id} to={url}>
              {text}
            </Link>
          ))}
        {selectedService === "webdesign" &&
          Links.filter((link) => link.id !== "webDesign").map(
            ({ id, text, url }) => (
              <Link key={id} to={url}>
                {text}
              </Link>
            )
          )}
        {selectedService === "appdesign" &&
          Links.filter((link) => link.id !== "appDesign").map(
            ({ id, text, url }) => (
              <Link key={id} to={url}>
                {text}
              </Link>
            )
          )}
        {selectedService === "graphicdesign" &&
          Links.filter((link) => link.id !== "graphicDesign").map(
            ({ id, text, url }) => (
              <Link key={id} to={url}>
                {text}
              </Link>
            )
          )}
      </div>
    </section>
  );
};

export default Services;
