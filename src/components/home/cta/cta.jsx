import "./cta.scss";
import Button from "../../button/button";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="cta ">
      <div className="cta__container container">
        <div className="cta__text-container">
          <h1 className="cta__heading">Let’s talk about your project</h1>
          <p className="cta__p">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Link className="cta__button-container" to="/contact">
          <Button text="get in touch" className="white" />
        </Link>
      </div>
    </section>
  );
};

export default Cta;
