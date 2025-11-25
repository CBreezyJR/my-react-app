import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHammer, FaTruck, FaOilCan, FaBuilding, FaCogs, FaIndustry } from "react-icons/fa";

import posta10 from "../assets/posta10.jpg";
import tunduruWater from "../assets/tunduru10.jpg";
import sasengaIrrigation from "../assets/sasenga10.jpg";
import tobaccoFactory from "../assets/tobacco10.jpg";
import pumpStation from "../assets/pumpstation.png";
import marineTerminal from "../assets/marine.png";
import sgrEarthworks from "../assets/sgrearthworks.png";
import pipelineInstallation from "../assets/4.oil.png";
import Hero01 from "../assets/hero01.jpg";
import Hero02 from "../assets/hero02.jpg";
import Hero03 from "../assets/hero03.jpg";
import Hero04 from "../assets/hero04.jpg";
import Hero05 from "../assets/hero05.jpg";
import Hero06 from "../assets/hero06.jpg";

import "./home.css";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [Hero01, Hero02, Hero03, Hero04, Hero05, Hero06];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7000); // auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };


  return (
    <div className="home-container">

      {/* HERO SECTION – IMAGE SLIDER WITH ARROWS */}
      <section className="hero-section">

        <div className="hero-slider">
          {[
            Hero01,
            Hero02,
            Hero03,
            Hero04,
            Hero05,
            Hero06
          ].map((img, index) => (
            <div
              className={`slide ${index === currentSlide ? "active" : ""}`}
              key={index}
            >
              <img src={img} alt={`slide-${index}`} />
            </div>
          ))}
        </div>

        <div className="hero-overlay"></div>

        {/* ARROWS */}
        <button className="arrow arrow-left" onClick={prevSlide}>
          ❮
        </button>
        <button className="arrow arrow-right" onClick={nextSlide}>
          ❯
        </button>

        <div className="hero-content">
          <h1>Welcome to NAGG Group</h1>
          <Link to="/our-services">
            <button className="hero-btn">Discover More</button>
          </Link>
        </div>

      </section>




      {/* ⭐ DO NOT TOUCH — OUR SERVICES SECTION EXACTLY PRESERVED ⭐ */}
      <section className="py-6 px-3 bg-gradient-to-b from-black/5 to-transparent text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
          Our Services
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 mb-14 text-base md:text-lg leading-relaxed">
          At <span className="text-red-500 font-semibold">NAGG Group</span>, we provide comprehensive services spanning construction, mining,
          oil & gas, logistics, real estate, and equipment rental — all driven by our
          commitment to quality and efficiency.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          <Link to="/construction" className="group bg-white/5 hover:bg-white/10 p-8 rounded-2xl w-full max-w-sm backdrop-blur-md transition-all duration-300 hover:scale-105">
            <FaHammer className="text-red-500 text-5xl mb-4 mx-auto group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-semibold text-white mb-2">Construction</h3>
            <p className="text-gray-300 text-sm">High-standard infrastructure & engineering projects nationwide.</p>
          </Link>

          <Link to="/logistics" className="group bg-white/5 hover:bg-white/10 p-8 rounded-2xl w-full max-w-sm backdrop-blur-md transition-all duration-300 hover:scale-105">
            <FaTruck className="text-red-500 text-5xl mb-4 mx-auto group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-semibold text-white mb-2">Logistics & Transport</h3>
            <p className="text-gray-300 text-sm">Reliable logistics for equipment, cargo, and bulk materials.</p>
          </Link>

          <Link to="/oil" className="group bg-white/5 hover:bg-white/10 p-8 rounded-2xl w-full max-w-sm backdrop-blur-md transition-all duration-300 hover:scale-105">
            <FaOilCan className="text-red-500 text-5xl mb-4 mx-auto group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-semibold text-white mb-2">Oil & Gas</h3>
            <p className="text-gray-300 text-sm">Supporting pipeline & energy infrastructure across Tanzania.</p>
          </Link>

          <Link to="/realestate" className="group bg-white/5 hover:bg-white/10 p-8 rounded-2xl w-full max-w-sm backdrop-blur-md transition-all duration-300 hover:scale-105">
            <FaBuilding className="text-red-500 text-5xl mb-4 mx-auto group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-semibold text-white mb-2">Real Estate</h3>
            <p className="text-gray-300 text-sm">Modern, sustainable property development.</p>
          </Link>

          <Link to="/mining" className="group bg-white/5 hover:bg-white/10 p-8 rounded-2xl w-full max-w-sm backdrop-blur-md transition-all duration-300 hover:scale-105">
            <FaCogs className="text-red-500 text-5xl mb-4 mx-auto group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-semibold text-white mb-2">Mining</h3>
            <p className="text-gray-300 text-sm">Efficient extraction, crushing & mineral logistics solutions.</p>
          </Link>

          <Link to="/rental" className="group bg-white/5 hover:bg-white/10 p-8 rounded-2xl w-full max-w-sm backdrop-blur-md transition-all duration-300 hover:scale-105">
            <FaIndustry className="text-red-500 text-5xl mb-4 mx-auto group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-semibold text-white mb-2">Equipment Rental</h3>
            <p className="text-gray-300 text-sm">Wide range of heavy machinery & industrial tools.</p>
          </Link>
        </div>
      </section>
      {/* ⭐ END OF UNTOUCHED OUR SERVICES SECTION ⭐ */}



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
    </div>
  );
}

export default Home;
