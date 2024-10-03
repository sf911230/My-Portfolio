import React from "react";
import turnIcon from "../assets/images/turnIconBack.svg";
import reactLogo from "../assets/images/reactLogo.png";

function ReactCard() {
  return (
    <div className="card react-card white animated">
      <div className="card-front">
        <img className="card-image" src={reactLogo} alt="React Icon" />
        <img className="card-turn-icon" src={turnIcon} alt="Next" />
      </div>
      <div className="card-back">
        <p className="card-backInfo">
          I have 1-1.5 years of experience with React, having learned the
          basics, and I’m eager to continue contributing to React projects.
        </p>
      </div>
    </div>
  );
}

export default ReactCard;
