import React from "react";
import "./logistics.css";

// Images
import logisticsMain1 from "../assets/3.logistics.jpg";
import logisticsMain2 from "../assets/logistics02.jpg";
import logisticsMain3 from "../assets/logistics03.jpg";

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
        <div className="project-list">
          {logisticsProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>
                  {project.location && <strong>Location:</strong>}{" "}
                  {project.location}
                </p>
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

export default Logistics;
