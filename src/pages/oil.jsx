import React from "react";
import "./oil.css";
import projectsData from "../data/projectdata";

function Oil() {
  const oilProjects = projectsData.filter((p) =>
    [
      "Construction of Pump Station (PS-3)",
      "Installation of Pipeline and Civil Works (EACOP)",
      "Construction of Marine Terminal Tank"
    ].includes(p.title)
  );

  return (
    <div className="oil-page">
      {/* Page Header */}
      <header className="oil-header">
        <h1>Oil & Gas Projects</h1>
        <p>Highlighted projects in the oil and gas sector undertaken by NAGG Group.</p>
      </header>

      {/* Featured Oil & Gas Projects */}
      <section className="projects-section">
        <h2>Featured Oil & Gas Projects</h2>
        <div className="projects-grid">
          {oilProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                {project.client && <p><strong>Client:</strong> {project.client}</p>}
                {project.location && <p><strong>Location:</strong> {project.location}</p>}
                {project.value && <p><strong>Value:</strong> {project.value}</p>}
                {project.year && <p><strong>Year:</strong> {project.year}</p>}
                <p className={`status ${project.status.toLowerCase().replace(" ", "-")}`}><strong>Status:</strong> {project.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Oil;
