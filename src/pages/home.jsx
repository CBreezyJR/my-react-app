import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHammer,
  FaTruck,
  FaOilCan,
  FaBuilding,
  FaCogs,
  FaIndustry,
} from "react-icons/fa";

import Hero01 from "../assets/hero01.jpg";
import Hero02 from "../assets/hero02.jpg";
import Hero03 from "../assets/hero03.jpg";
import Hero04 from "../assets/hero04.jpg";
import Hero05 from "../assets/hero05.jpg";
import Hero06 from "../assets/hero06.jpg";

import posta10 from "../assets/posta10.jpg";
import sasengaIrrigation from "../assets/sasenga10.jpg";
import tobaccoFactory from "../assets/tobacco10.jpg";
import tunduruWater from "../assets/tunduru10.jpg";
import pumpStation from "../assets/pumpstation.png";
import marineTerminal from "../assets/marine.png";
import sgrEarthworks from "../assets/sgrearthworks.png";
import pipelineInstallation from "../assets/4.oil.png";

import CppLogo from "../assets/cpp.jpg";
import DocgLogo from "../assets/docg.jpg";
import EacopLogo from "../assets/eacop.jpg";
import GsmLogo from "../assets/gsm.jpg";
import MttLogo from "../assets/mtt1.png";
import NicLogo from "../assets/nic.jpg";
import RubisLogo from "../assets/rubis.jpg";
import TbaLogo from "../assets/tba.jpg";
import TrcLogo from "../assets/trc.jpg";
import TuwasaLogo from "../assets/tuwasa.jpg";
import YapiLogo from "../assets/yapi.jpg";

import "./home.css";

function Home() {
  const slides = [Hero01, Hero02, Hero03, Hero04, Hero05, Hero06];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const partners = [
    CppLogo,
    DocgLogo,
    EacopLogo,
    GsmLogo,
    MttLogo,
    NicLogo,
    RubisLogo,
    TbaLogo,
    TrcLogo,
    TuwasaLogo,
    YapiLogo,
  ];

  return (
    <div className="home-container">

      {/* HERO */}
      <section className="hero-wrapper">
        <img src={slides[currentSlide]} className="hero-image" />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Building Tanzania’s Future.</h1>
          <p>Engineering, Infrastructure, Logistics & Energy Solutions.</p>
          <Link to="/what-we-do" className="hero-btn">Discover More</Link>
        </div>
      </section>

      {/* PRINCIPLES SECTION */}
      <section className="principles">
        <h2 className="section-title">Our Core Principles</h2>
        <div className="principles-grid">

          <div className="p-card">
            <h3>Quality</h3>
            <p>We ensure strict quality standards on all our projects.</p>
          </div>

          <div className="p-card">
            <h3>Safety</h3>
            <p>We follow the Tanzania OSHA Act No.05 (2003).</p>
          </div>

          <div className="p-card">
            <h3>Innovation</h3>
            <p>We integrate modern systems and new technologies.</p>
          </div>

          <div className="p-card">
            <h3>Sustainability</h3>
            <p>We build with environmental responsibility in mind.</p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">

          <Link to="/construction" className="service-card">
            <FaHammer className="service-icon" />
            <h3>Construction</h3>
            <p>Roads, buildings, bridges, civil works.</p>
          </Link>

          <Link to="/logistics" className="service-card">
            <FaTruck className="service-icon" />
            <h3>Logistics</h3>
            <p>Heavy transport & machinery movement.</p>
          </Link>

          <Link to="/oil" className="service-card">
            <FaOilCan className="service-icon" />
            <h3>Oil & Gas</h3>
            <p>Pipeline & energy infrastructure.</p>
          </Link>

          <Link to="/realestate" className="service-card">
            <FaBuilding className="service-icon" />
            <h3>Real Estate</h3>
            <p>Modern developments & commercial spaces.</p>
          </Link>

          <Link to="/mining" className="service-card">
            <FaCogs className="service-icon" />
            <h3>Mining</h3>
            <p>Extraction, processing & logistics.</p>
          </Link>

          <Link to="/rental" className="service-card">
            <FaIndustry className="service-icon" />
            <h3>Equipment Rental</h3>
            <p>Heavy machinery & industrial equipment.</p>
          </Link>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-wrapper">
        <h2 className="projects-heading">Our Projects</h2>

        <div className="projects-gallery">

          {/* --- Existing 5 Projects (unchanged) --- */}
          {[
            {
              img: posta10,
              title: "Construction of Posta House",
              info: "Client: Tanzania Posta Corporation | Year: 2025-26",
              link: "/posta",
            },
            {
              img: sasengaIrrigation,
              title: "Rehabilitation of Sasenga Irrigation Scheme",
              info: "Client: National Irrigation Commission | Year: TBA",
              link: "/sasenga",
            },
            {
              img: tobaccoFactory,
              title: "Construction of Tobacco Factory",
              info: "Client: Mastermind Tobacco Tanzania | Year: 2025-26",
              link: "/tobacco",
            },
            {
              img: tunduruWater,
              title: "Improvement of Water Supply in Tunduru",
              info: "Client: TUUWASA | Year: 2025-26",
              link: "/tunduru",
            },
            {
              img: pumpStation,
              title: "Construction of Pump Station (PS-3)",
              info: "Client: EACOP | Year: 2025",
              link: "/ps3",
            },
          ].map((proj, idx) => (
            <div className="project-frame" key={idx}>
              <img src={proj.img} alt={proj.title} className="project-img" />
              <div className="hover-info">
                <h3>{proj.title}</h3>
                <p>{proj.info}</p>
                <Link to={proj.link}>
                  <button className="learn-btn">Learn More</button>
                </Link>
              </div>
            </div>
          ))}


          {/* --- New 3 Projects (now with Learn More button!) --- */}
          {[
            {
              img: sgrEarthworks,
              title: "Construction of Main Alignment (Earthworks) for Standard Gauge Railway Project",
              info: "Location: Tanzania | Status: New Project | Year: 2024",
              link: "/sgr"
            },
            {
              img: marineTerminal,
              title: "Construction of Marine Terminal Tank",
              info: "Client: EACOP | Location: Tanzania | Status: New Project | Year: 2024",
              link: "/marine"
            },
            {
              img: pipelineInstallation,
              title: "Installation of Pipeline and Civil Works (EACOP)",
              info: "Distance: 110km | Status: Planned | Year: January 2025-Ongoing",
              link: "/pipeline"
            }
          ].map((proj, idx) => (
            <div className="project-frame" key={idx + 10}>
              <img src={proj.img} alt={proj.title} className="project-img" />
              <div className="hover-info">
                <h3>{proj.title}</h3>
                <p>{proj.info}</p>
                <Link to={proj.link}>
                  <button className="learn-btn">Learn More</button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-section">
        <h2 className="partners-title">Our Partners</h2>
        <p className="partners-description">
          We are proud to work with leading national and international organizations
          across energy, construction, logistics, and infrastructure development.
          These strategic partnerships strengthen our capacity to deliver world-class
          engineering solutions across Tanzania.
        </p>

        <div className="partners-grid">
          {partners.map((logo, index) => (
            <div key={index} className="partner-card">
              <img src={logo} alt="Partner" className="partner-logo" />
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}

export default Home;
