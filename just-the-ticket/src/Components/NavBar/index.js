import logo from "../../assets/just-the-ticket-nav-bar-03.png";

import hamburger from "../../assets/just-the-ticket-nav-bar-04.png";
import "./NavBar.css";

/**
 * @navbar Generates the navbar with the logo, and the menu bar(hamburger)
 * the hamburger is not functional at the moment.
 */
const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} className="logo" alt="Just the Ticket Logo" />
      <img src={hamburger} className="hamburger" alt="Mock Hamburger Menu" />
    </div>
  );
};
export default NavBar;
