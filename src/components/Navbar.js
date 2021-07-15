import React from "react";
import cn from "classnames";
import "../styles/Navbar.scss";
import logo from "../images/logo.png";

const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <img className={cn("logo")} src={logo} alt="Logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
