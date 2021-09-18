import React from "react";
import logo from "./images/tranqLogo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <a href="/">
        <img src={logo} alt="tranquility logo" />
      </a>
      <nav>
        <Link to="/teams">
          <li>Teams</li>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
