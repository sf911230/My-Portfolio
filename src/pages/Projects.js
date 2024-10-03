import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import backArrow from "../assets/images/turnIconBack.svg";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/sf911230/2acd779b1c1f4a70c231ca635cfc8e53/raw/75f760f3126d38af0feddde836bd1aba39eda502/projectsData.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading projects: {error}</p>;
  if (projects.length === 0) return <p>No projects available.</p>;

  return (
    <div className="projects">
      <div className="projects-grid-wrapper">
        <div className="projects-grid-container">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              projectInfo={project.projectInfo}
              technologies={project.technologies}
              responsibilities={project.responsibilities.join(", ")}
            />
          ))}
        </div>

        <Link className="back-link" to="/">
          <span> Back</span>
          <img className="back-arrow" src={backArrow} alt="Back arrow" />
        </Link>
      </div>
    </div>
  );
}

export default Projects;
