import React from "react";
import nextArrow from "../assets/images/nextIcon.svg";
import { Link } from "react-router-dom";

function PreviousProjects() {
  return (
    <Link to="/projects">
      <div className="card projects-card">
        <h2 className="big-headline">PREVIOUS PROJECTS</h2>
        <div className="card-link">
          <span>More</span>
          <img className="card-next-arrow" src={nextArrow} alt="Next" />
        </div>
      </div>
    </Link>
  );
}

export default PreviousProjects;
