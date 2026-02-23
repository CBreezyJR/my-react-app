import React from "react";
import "./logistics.css";
import { Link } from "react-router-dom";

// Images
import logisticsMain1 from "../assets/cargo.jpeg";
import logisticsMain2 from "../assets/logistics02.jpg";
import logisticsMain3 from "../assets/naggtransportation.png";

// Import projects data
import projectsData from "../data/projectdata";

function Logistics() {
  // Filter only transport/logistics projects
  const logisticsProjects = projectsData.filter(
    (project) => project.category === "Transport"
  );

  return (
    <div className="logistics-page">
      {/* Header */}
      <div className="logistics-header">
        <h1>Transport & Logistics</h1>
        <p>
          NAGG Group provides reliable transportation solutions for machinery,
          fuel, and construction materials across East Africa. Our modern fleet
          and expert team ensure efficiency, safety, and timely deliveries.
        </p>
      </div>

      {/* Main Images */}
      <div className="logistics-images">
        <img src={logisticsMain1} alt="Logistics 1" />
        <img src={logisticsMain2} alt="Logistics 2" />
        <img src={logisticsMain3} alt="Logistics 3" />
      </div>

      {/* Featured Projects */}
      <div className="projects-involved">
        <h2>Featured Logistics Projects</h2>
        <div className="projects-grid">
          {logisticsProjects.map((project) => (
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

export default Logistics;
