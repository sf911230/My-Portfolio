import React from "react";
import ReactCard from "../components/ReactCard";
import SkillsCard from "../components/SkillsCard";
import HomeCard from "../components/HomeCard";
import PreviousProjects from "../components/PreviousProjects";
import LanguageCard from "../components/LanguageCard";
import ProfileCard from "../components/AboutMeCard";

function HomePage() {
  return (
    <div>
      <div className="home-grid-container">
        <ProfileCard />
        <SkillsCard />
        <HomeCard />
        <PreviousProjects />
        <ReactCard />
        <LanguageCard />
      </div>
    </div>
  );
}

export default HomePage;
