import React from "react";
import nextArrow from "../assets/images/nextIcon.svg";
import { Link } from "react-router-dom";

function ProfileCard() {
  return (
    <Link to="/about-me">
      <div className="card profile-card">
        <h2 className="card-headline">ABOUT ME</h2>
        <p>
          <span className="card-label">Name:</span> Stefani Fiikova-Dimitrova
        </p>
        <p>
          <span className="card-label">Location:</span> Tenevo, Bulgaria
        </p>
        <div className="card-link">
          <span>More</span>
          <img className="card-next-arrow" src={nextArrow} alt="Profile" />
        </div>
      </div>
    </Link>
  );
}

export default ProfileCard;
