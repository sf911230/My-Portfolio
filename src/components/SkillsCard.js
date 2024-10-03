import React from "react";
import htmlJsCssIcon from "../assets/images/htmlJsCssIcon.png";
import jqueryIcon from "../assets/images/jqueryIcon.png";
import reactIcon from "../assets/images/reactIcon.png";
import lessIcon from "../assets/images/lessIcon.svg";
import sassIcon from "../assets/images/sassIcon.png";
import muiIcon from "../assets/images/muiIcon.png";
import restapiIcon from "../assets/images/restapiIcon.png";
import jiraIcon from "../assets/images/jiraIcon.png";
import figmaIcon from "../assets/images/figmaIcon.png";
import responsiveIcon from "../assets/images/responsiveIcon.png";
import turnIcon from "../assets/images/turnIconBack.svg";

function SkillsCard() {
  return (
    <div className="card skills-card white animated">
      <div className="card-front">
        <h2 className="skills-title">Skills</h2>
        <img
          className="htmlJsCss-icon skill-icon"
          src={htmlJsCssIcon}
          alt="Html CSS JS"
        />
        <img className="card-turn-icon" src={turnIcon} alt="Next" />
      </div>
      <div className="card-back">
        <ul className="skills-wrapper">
          <li>
            <img
              className="jquery-icon skill-icon"
              src={jqueryIcon}
              alt="Jquery"
            />
          </li>
          <li>
            {" "}
            <img
              className="react-icon skill-icon"
              src={reactIcon}
              alt="React"
            />
          </li>
          <li>
            <img className="less-icon skill-icon" src={lessIcon} alt="Less" />
          </li>
          <li>
            <img className="sass-icon skill-icon" src={sassIcon} alt="Sass" />
          </li>
          <li>
            <img
              className="responsive-icon skill-icon"
              src={responsiveIcon}
              alt="Responsive Design"
            />
          </li>
        </ul>
        <ul className="skills-wrapper">
          <li>
            <img
              className="mui-icon skill-icon"
              src={muiIcon}
              alt="MaterialUi"
            />
          </li>
          <li>
            <img
              className="restapi-icon skill-icon"
              src={restapiIcon}
              alt="RestApi"
            />
          </li>
          <li>
            <img className="jira-icon skill-icon" src={jiraIcon} alt="JIRA" />
          </li>
          <li>
            <img
              className="figma-icon skill-icon"
              src={figmaIcon}
              alt="Figma"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SkillsCard;
