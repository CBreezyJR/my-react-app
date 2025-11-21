import React from "react";
import "./about.css";
import about1 from "../assets/operation02.png";
import about2 from "../assets/machinerymobilization.png";
import about3 from "../assets/operation03.png";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <div className="about-section">
        <div className="about-text">
          <h2>About NAGG Group</h2>
          <p>
            NAGG GROUP is a company specializing in OIL and GAS, capable of
            managing complex large-scale projects with top quality standards.
            We have expanded our technical abilities with a strong team of
            engineers from Turkey, China, South Africa, and highly experienced
            local engineers. We are a civil construction company with Class 1
            and Building Class 2 certifications.
          </p>
        </div>
        <img src={about1} alt="About NAGG Group" className="about-image" />
      </div>

      <div className="about-section reverse">
        <img src={about2} alt="Vision" className="about-image" />
        <div className="about-text">
          <h2>Vision</h2>
          <p>
            Our vision is to deliver innovative, effective, and profitable
            solutions tailored to our customers' needs. We aim to create
            long-term value while committing to safety, social and environmental
            responsibility, and operational excellence. We envision a future
            where our projects stand as benchmarks of excellence and integrity.
          </p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-text">
          <h2>Mission</h2>
          <p>
            We aspire to become the premier provider of innovative solutions in
            mining, modern transportation, construction, energy, real estate,
            and related sectors. Our mission is to set the standard for
            excellence through sustainable practices, efficiency, and a deep
            commitment to community growth and national development.
          </p>
        </div>
        <img src={about3} alt="Mission" className="about-image" />
      </div>

      <div className="core-values">
        <h2>Core Values</h2>
        <ul>
          <li>
            <strong>Quality:</strong> We ensure top-tier standards in every
            project, product, and service we deliver.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> Our teams constantly learn,
            adapt, and innovate to improve performance and value.
          </li>
          <li>
            <strong>Safety:</strong> The safety of our employees, clients, and
            communities remains our highest priority.
          </li>
          <li>
            <strong>Innovation:</strong> We adopt cutting-edge technology to
            drive smarter, more efficient project outcomes.
          </li>
          <li>
            <strong>Environmental Responsibility & Sustainability:</strong> We
            minimize our ecological footprint through responsible design and
            execution, ensuring lasting benefits for future generations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
