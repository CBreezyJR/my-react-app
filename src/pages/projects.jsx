import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectdata";
import "./projects.css";

export default function Projects() {
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterRegion, setFilterRegion] = useState("All");
  const [filterYear, setFilterYear] = useState("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];
  const regions = ["All", ...Array.from(new Set(projectsData.map(p => p.location ? p.location.split(",")[0] : "Unknown")))];
  const years = ["All", ...Array.from(new Set(projectsData.map(p => p.year)))];

  const filteredProjects = projectsData.filter(p => {
    const projectRegion = p.location ? p.location.split(",")[0] : "Unknown";
    return (
      (filterCategory === "All" || p.category === filterCategory) &&
      (filterRegion === "All" || projectRegion === filterRegion) &&
      (filterYear === "All" || p.year === filterYear)
    );
  });

  const highlightIds = [1, 2, 5, 6, 12]; // Posta, Tunduru, Yongoma, Sasenga, Tobacco (ids per your data)

  return (
    <div className="projects-wrapper">
      <h1 className="projects-heading">Our Projects</h1>

      <div className="filters-bar">
        <label className="filter-label">
          Category
          <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="filter-select">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>

        <label className="filter-label">
          Region
          <select value={filterRegion} onChange={e => setFilterRegion(e.target.value)} className="filter-select">
            {regions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </label>

        <label className="filter-label">
          Year
          <select value={filterYear} onChange={e => setFilterYear(e.target.value)} className="filter-select">
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </label>

        <button className="filter-reset" onClick={() => { setFilterCategory("All"); setFilterRegion("All"); setFilterYear("All"); }}>
          Reset
        </button>
      </div>

      <div className="projects-gallery">
        {filteredProjects.map(project => (
          <div className="project-frame" key={project.id}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="hover-info">
              <h3>{project.title}</h3>
              {project.client && <p><strong>Client:</strong> {project.client}</p>}
              {project.location && <p><strong>Location:</strong> {project.location}</p>}
              {project.year && <p><strong>Year:</strong> {project.year}</p>}
              {project.link && (
                <Link to={project.link}>
                  <button className="learn-btn">Learn More</button>
                </Link>
              )}

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
