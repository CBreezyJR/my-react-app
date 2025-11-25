import React from "react";
import "./realestate.css";

import realEstateMain from "../assets/5.realestate.jpg";
import realEstate02 from "../assets/3dhouse.png";
import realEstate03 from "../assets/3dhouse.jpg";

function RealEstate() {
  const projects = [
    {
      id: 1,
      title: "Private Residential Homes",
      description:
        "We design and construct modern private houses tailored for comfort, style, and long-term durability. Each home is built with quality finishing, energy efficiency, and client-specific customization.",
      image: realEstateMain,
    },
    {
      id: 2,
      title: "Rental Housing Units",
      description:
        "NAGG develops housing units optimized for rental purposes—affordable, secure, and strategically located. These units are ideal for families, students, and working professionals.",
      image: realEstate02,
    },
    {
      id: 3,
      title: "Modern Housing Estates",
      description:
        "We create organized residential estates offering secure gated environments, shared amenities, and modern infrastructure. Designed for sustainable and community-friendly living.",
      image: realEstate03,
    },
  ];

  return (
    <div className="realestate-page">
      {/* Header */}
      <header className="realestate-header">
        <h1>Real Estate Development</h1>
        <p>
          NAGG Group specializes in designing and constructing high-quality private
          homes, rental units, and modern housing estates. Our focus is on
          affordability, durability, and modern design that meets the needs of
          individuals, families, and communities across Tanzania.
        </p>
      </header>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Our Real Estate Services</h2>
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
