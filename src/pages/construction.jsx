import React from "react";
import "./construction.css";
import projectsData from "../data/projectdata";

import miningMain1 from "../assets/marine7.jpg";
import miningMain2 from "../assets/posta9.jpg";
import miningMain3 from "../assets/marine10.jpg";

function Construction() {
  // Filter only construction category projects
  const constructionProjects = projectsData.filter(
    (p) => p.category === "Construction"
  );

  return (
    <div className="construction-page">
      {/* HEADER */}
      <header className="construction-header">
        <h1>Construction Projects</h1>
        <p>
          A showcase of NAGG Group’s major construction projects across Tanzania,
          delivering reliability, innovation, and engineering excellence.
        </p>
      </header>
       
       {/* Main Images */}
      <div className="mining-images">
        <img src={miningMain1} alt="Mining 1" />
        <img src={miningMain2} alt="Mining 2" />
        <img src={miningMain3} alt="Mining 3" />
      </div>

      {/* PROJECT CARDS */}
      <section className="construction-section">
        <h2>Our Construction Projects</h2>

        <div className="projects-grid">
          {constructionProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>
                <strong>Location:</strong> {project.location}
              </p>
              <p>
                <strong>Status:</strong> {project.status}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Construction;
