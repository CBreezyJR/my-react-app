import React from "react";
import "./mining.css";
import { Link } from "react-router-dom";

// Images
import miningMain1 from "../assets/dom7.jpg";
import miningMain2 from "../assets/nditi7.jpg";
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
        <div className="projects-grid">
          {miningProjects.map((project) => (
            <Link to={project.link} key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p><strong>Location:</strong> {project.location}</p>
              <p><strong>Status:</strong> {project.status}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mining;
