import React from "react";
import "./mining.css";

// Images
import miningMain1 from "../assets/dom7.jpg";
import miningMain2 from "../assets/sassya5.jpg";
import miningMain3 from "../assets/nditi10.jpg";

// Import projects data
import projectsData from "../data/projectdata";

function Mining() {
  const miningProjects = projectsData.filter(
    (project) => project.category === "Mining"
  );

  return (
    <div className="mining-page">
      {/* Header */}
      <div className="mining-header">
        <h1>Mining</h1>
        <p>
          NAGG Group provides safe, efficient, and sustainable mining services
          across Tanzania. From exploration to extraction, we ensure compliance
          with international standards while delivering high-quality results.
        </p>
      </div>

      {/* Main Images */}
      <div className="mining-images">
        <img src={miningMain1} alt="Mining 1" />
        <img src={miningMain2} alt="Mining 2" />
        <img src={miningMain3} alt="Mining 3" />
      </div>

      {/* Featured Projects */}
      <div className="projects-involved">
        <h2>Featured Mining Projects</h2>
        <div className="project-list">
          {miningProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-info">
                <h3>{project.title}</h3>
                {project.location && (
                  <p>
                    <strong>Location:</strong> {project.location}
                  </p>
                )}
                {project.client && (
                  <p>
                    <strong>Client:</strong> {project.client}
                  </p>
                )}
                {project.value && (
                  <p>
                    <strong>Project Value:</strong> {project.value}
                  </p>
                )}
                {project.materials && (
                  <p>
                    <strong>Materials:</strong> {project.materials}
                  </p>
                )}
                <p>
                  <strong>Status:</strong> {project.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mining;
