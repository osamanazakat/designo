import "./footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo-light.png";
import Cta from "../cta/cta";

import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Cta />
        <div className="footer__container container">
          <div className="footer__nav">
            <Link to="/">
              <img src={Logo} alt="logo" className="footer__logo" />
            </Link>
            <div className="footer__links">
              <Link className="footer__link" to="/company">
                our company
              </Link>
              <Link className="footer__link" to="/locations">
                locations
              </Link>
              <Link className="footer__link" to="/contact">
                contact
              </Link>
            </div>
          </div>

          <div className="footer__info-container">
            <p className="footer__contact">
              Designo Central Office 3886 Wellington Street Toronto, Ontario M9C
              3J5
            </p>

            <div className="footer__info">
              <p>Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.com</p>
            </div>

            <div className="footer__icons">
              <a href="https://web.facebook.com/" target="_blank">
                <AiFillFacebook />
              </a>
              <a href="https://web.facebook.com/" target="_blank">
                <AiFillYoutube />
              </a>
              <a href="https://web.facebook.com/" target="_blank">
                <AiOutlineTwitter />
              </a>
              <a href="https://web.facebook.com/" target="_blank">
                <AiOutlineInstagram />
              </a>
              <a href="https://web.facebook.com/" target="_blank">
                <BsPinterest />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
