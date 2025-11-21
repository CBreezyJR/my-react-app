import React from "react";
import "./construction.css";
import projectsData from "../data/projectdata";

function Construction() {
  const featured = projectsData.filter(p =>
    ["Construction of Tobacco Factory", "Construction of Posta House Office Building", "Construction of Main SGR Alignment"].includes(p.title)
  );

  const waterProjects = projectsData.filter(p =>
    ["Improvement of Water Supply System in Tunduru", "Construction of Yongoma Dam"].includes(p.title)
  );

  return (
    <div className="construction-page">
      <header>
        <h1>Construction Projects</h1>
        <p>Our key construction and water projects highlighting excellence and efficiency.</p>
      </header>

      <section>
        <h2>Featured Construction Projects</h2>
        <div className="projects-grid">
          {featured.map(p => (
            <div className="project-card" key={p.id}>
              <div className="project-image"><img src={p.image} alt={p.title} /></div>
              <h3>{p.title}</h3>
              <p><strong>Client:</strong> {p.client}</p>
              <p><strong>Location:</strong> {p.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Featured Water Projects</h2>
        <div className="projects-grid">
          {waterProjects.map(p => (
            <div className="project-card" key={p.id}>
              <div className="project-image"><img src={p.image} alt={p.title} /></div>
              <h3>{p.title}</h3>
              <p><strong>Location:</strong> {p.location}</p>
              <p><strong>Value:</strong> {p.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Construction;
