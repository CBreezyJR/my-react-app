import React, { useState } from "react";
import "./App.css";

// Import images from src/assets
import heroMedia from "./assets/0.hero.jpg";
import constructionImg from "./assets/1.construction.jpg";
import miningImg from "./assets/2.Mining.jpg";
import logisticsImg from "./assets/3.Logistics.jpg";
import oilImg from "./assets/4.oil.jpg";
import realEstateImg from "./assets/5.realestate.jpg";
import rentalImg from "./assets/6.rental.jpg";

const services = [
  { name: "Construction", image: constructionImg, description: "Design-build delivery across commercial, industrial, and infrastructure projects rooted in precision and safety." },
  { name: "Mining", image: miningImg, description: "Exploration to beneficiation for coal, gold, nickel, and graphite—with rigorous compliance and environmental stewardship." },
  { name: "Logistics", image: logisticsImg, description: "Heavy haulage, rig moving, and customs brokerage engineered to move critical cargo on schedule." },
  { name: "Oil & Gas", image: oilImg, description: "Pipeline infrastructure execution and field services for East Africa's largest energy projects." },
  { name: "Real Estate", image: realEstateImg, description: "Acquisitions, negotiations, and project supervision that elevate property value across Tanzania." },
  { name: "Equipment Rental", image: rentalImg, description: "High-availability fleet of heavy machinery, from cranes and graders to drill rigs and haul trucks." },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
    document.body.classList.toggle("light", darkMode);
  };

  return (
    <div className="app">
      {/* Dark Mode Toggle */}
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Hero Section */}
      <header className="header">
        <img src={heroMedia} alt="Hero" className="hero-image" />
        <div className="overlay"></div>
        <div className="header-content">
          <h1 className="heading">Committed to quality, safety & innovation</h1>
          <p className="subtitle">
            NAGG Group Company Limited delivers integrated solutions across construction, mining, logistics, oil & gas, real estate, and equipment rental.
          </p>
          <button className="btn-primary">Explore our work</button>
        </div>
      </header>

      {/* Services Section */}
      <main className="main">
        <section className="services">
          <h2 className="section-title">Our Services</h2>
          <div className="service-grid">
            {services.map((service) => (
              <div key={service.name} className="service-card">
                <img src={service.image} alt={service.name} className="service-image" />
                <div className="service-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
