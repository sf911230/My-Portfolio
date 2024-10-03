import React from "react";
import turnIcon from "../assets/images/turnIconBack.svg";
import homeLogo from "../assets/images/homeLogo.png";

function HomeCard() {
  return (
    <div className="card home-card animated">
      <div className="card-front">
        <img className="card-image" src={homeLogo} alt="Profile" />
        <img className="card-turn-icon" src={turnIcon} alt="Next" />
      </div>
      <div className="card-back">
        <p className="card-backInfo">
          I’ve worked fully remotely for the past 4 years and I’m looking for a
          similar position again because I’m based in the countryside and any
          other option is not possible.
        </p>
      </div>
    </div>
  );
}

export default HomeCard;
