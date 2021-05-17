import React from "react";
import "./NavbarComponent.scss";

import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <div className="Navbar-container">
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <div className="navbar-items">
          <h4>
            <Link to="/">Home</Link>
          </h4>
          <h4>
            <Link to="allbootcamps">All Bootcamps</Link>
          </h4>
          <h4>Top Rated Bootcamps</h4>
          <h4>Upcoming Bootcamp Events</h4>
        </div>
        <div className="social-media">{/* Social media accounts*/}</div>
      </div>
    </>
  );
};

export default NavbarComponent;
