import "./navbar.scss";
import Logo from "../../assets/shared/desktop/logo-dark.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isNavbarShowing, setIsNavbarShowing] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Link to="/" onClick={() => setIsNavbarShowing(false)}>
          <img src={Logo} alt="logo" className="navbar__logo" />
        </Link>
        <div
          className={`navbar__links ${isNavbarShowing ? "show-navbar" : ""}`}
        >
          <Link className="navbar__link" to="/ourcompany">
            our company
          </Link>
          <Link className="navbar__link" to="/locations">
            locations
          </Link>
          <Link className="navbar__link" to="/contact">
            contact
          </Link>
        </div>
        <div className="navbar__btns">
          <button
            className="navbar__btn"
            onClick={() => setIsNavbarShowing(!isNavbarShowing)}
          >
            {isNavbarShowing ? <AiOutlineClose /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
