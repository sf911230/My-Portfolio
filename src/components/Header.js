import React from "react";
import profileImage from "../assets/images/profileImage.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-layer">
        <Link to="/">
          <div className="header-content">
            <div className="header-profileImage">
              <img
                src={profileImage}
                alt="Profile of Stefani Fiykova Dimitrova"
              />
            </div>
            <h1 className="header-headline">FRONT-END DEVELOPER</h1>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
