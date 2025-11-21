import React from "react";
import "./realestate.css";
import realEstateMain from "../assets/5.realestate.jpg";
import realEstate02 from "../assets/realestate02.png";
import realEstate03 from "../assets/realestate03.jpg";

function RealEstate() {
  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      description:
        "A premium residential development featuring modern architecture, high-end amenities, and sustainable building practices. Designed to provide comfort, elegance, and security to residents.",
      image: realEstateMain,
    },
    {
      id: 2,
      title: "Commercial Office Towers",
      description:
        "State-of-the-art commercial office towers strategically located in urban hubs. Equipped with energy-efficient systems and smart building solutions for modern businesses.",
      image: realEstate02,
    },
    {
      id: 3,
      title: "Mixed-Use Urban Development",
      description:
        "A vibrant mixed-use project combining retail, office, and residential spaces. Focused on creating community-centric spaces with accessibility, convenience, and modern infrastructure.",
      image: realEstate03,
    },
  ];

  return (
    <div className="realestate-page">
      {/* Header */}
      <header className="realestate-header">
        <h1>Real Estate Projects</h1>
        <p>
          NAGG Group delivers high-quality real estate developments across Tanzania,
          blending innovation, sustainability, and premium design. From luxury
          residences to mixed-use urban complexes, our projects redefine modern living
          and working environments.
        </p>
      </header>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Featured Real Estate Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RealEstate;
