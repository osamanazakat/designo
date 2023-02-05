import "./button.scss";
import { Link } from "react-router-dom";

const Button = ({ text, className }) => {
  return (
    <Link to="/company">
      <button className={`btn ${className}`}>{text}</button>
    </Link>
  );
};

export default Button;
