import React from "react";
import "./oil.css";
import projectsData from "../data/projectdata";
import { Link } from "react-router-dom";

// Showcase images
import eacop7 from "../assets/eacop7.jpg";
import eacop8 from "../assets/eacop8.jpg";
import p9 from "../assets/ps39.jpg";
import p10 from "../assets/ps310.jpg";

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

      {/* TOP SHOWCASE IMAGE GALLERY */}
      <section className="showcase-section">
        <h1 className="oil-title">Oil & Gas</h1>
        <p className="oil-intro">
          Explore our major developments within the oil and gas sector, showcasing our expertise
          in pipeline construction, pump station development, and marine terminal works.
        </p>

        <div className="showcase-gallery">
          {[eacop7, eacop8, p9, p10].map((img, idx) => (
            <img key={idx} src={img} alt="showcase" className="showcase-img" />
          ))}
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="projects-section">
        <h2 className="projects-header">Featured Oil & Gas Projects</h2>

        <div className="projects-grid">
          {oilProjects.map((project) => (
            <Link to={project.link} key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p><strong>Location:</strong> {project.location}</p>
              <p><strong>Status:</strong> {project.status}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Oil;
