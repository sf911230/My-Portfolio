import React, { useContext } from "react";
import linkedTinLogo from "../assets/images/linkedTinLogo.png";
import emailIcon from "../assets/images/emailIcon.png";
import phoneIcon from "../assets/images/phoneIcon.png";
import colorModeIcon from "../assets/images/colorModeIcon.png";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="color-mode-wrapper">
          <button onClick={toggleTheme} aria-label="Toggle theme">
            <img
              className="color-mode-button"
              src={colorModeIcon}
              alt="Toggle Color Mode"
            />
            <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
          </button>
        </div>

        <div className="footer-logos">
          <a href="https://www.linkedin.com/in/stefani-fiykova-dimitrova-093048141">
            <img
              className="footer-icon Li-icon"
              src={linkedTinLogo}
              alt="LinkedIn Profile"
            />
          </a>
          <Link to="/contact-me">
            <img
              className="footer-icon email-icon"
              src={emailIcon}
              alt="Email me"
            />
          </Link>
          <a href="tel:+359888258942">
            <img
              className="footer-icon phone-icon"
              src={phoneIcon}
              alt="Call me"
            />
          </a>
        </div>

        <div className="footer-copy">
          <span>© 2024 Stefani Fiykova Dimitrova.</span>
          <br />
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
