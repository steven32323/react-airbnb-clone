import logo from "../assets/airbnb-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} />
      <h4>airbnb</h4>
    </nav>
  );
};
export default Navbar;
