import logo from "../../assets/just-the-ticket-nav-bar-03.png";
import hamburger from "../../assets/just-the-ticket-nav-bar-04.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} className="logo" alt="Just the Ticket Logo" />
      <img src={hamburger} className="hamburger" alt="Mock Hamburger Menu" />
    </div>
  );
};
export default NavBar;
