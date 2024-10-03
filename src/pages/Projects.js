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
        const response = await fetch("http://localhost:5000/projects");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
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
