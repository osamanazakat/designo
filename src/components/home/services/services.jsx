import "./services.scss";

const Services = () => {
  return (
    <div className="container services">
      <div className="services_container">
        <div className="services__container-left">
          <div className="services__left-web">
            <h1>Web Design</h1>
            <p>View Projects</p>
          </div>
        </div>
        <div className="services__container-right">
          <div className="services__top-app">
            <h1>App Design</h1>
            <p>View Projects</p>
          </div>
          <div className="services__bottom-graphic">
            <h1>Graphic Design</h1>
            <p>View Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
