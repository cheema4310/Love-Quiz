import { NavLink } from "react-router-dom";

import logoImg from "../../assests/5+love+lanuages.png";

import "./Header.css";

const Header = () => {
  let activeStyle = {
    color: "#fe7e6d",
  };
  return (
    <nav className="header-nav">
      <ul className="nav-ul">
        <li className="nav-li nav-logo">
          <NavLink to="/">
            <img src={logoImg} alt="logo" />
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            to="/quiz"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Quiz
          </NavLink>
        </li>
        <li className="nav-li nav__contact">
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
