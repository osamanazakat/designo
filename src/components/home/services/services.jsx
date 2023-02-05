import "./services.scss";

const Services = () => {
  return (
    <section className="services">
      <div className="container services__container">
        <div className="services__container-left">
          <div className="services__left-web">
            <h1 className="services__heading">Web Design</h1>
            <p className="services__p">View Projects</p>
          </div>
        </div>
        <div className="services__container-right">
          <div className="services__top-app">
            <h1 className="services__heading">App Design</h1>
            <p className="services__p">View Projects</p>
          </div>
          <div className="services__bottom-graphic">
            <h1 className="services__heading">Graphic Design</h1>
            <p className="services__p">View Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
