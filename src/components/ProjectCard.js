import React from "react";

function ProjectCard({ title, projectInfo, technologies, responsibilities }) {
  return (
    <div className="projects-card">
      <h1 className="projects-title">{title}</h1>
      <span className="projects-label">Project Info</span>
      <p className="projects-info">{projectInfo}</p>

      <span className="projects-label">Used Technologies</span>
      <ul className="projects-technologies">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <span className="projects-label">Responsibilities:</span>
      <p className="projects-responsibilities">{responsibilities}</p>
    </div>
  );
}

export default ProjectCard;
