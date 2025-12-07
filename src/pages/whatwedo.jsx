import React from "react";
import { Link } from "react-router-dom";
import "./ourservices.css";

import constructionImg from "../assets/marine9.jpg";
import miningImg from "../assets/nditi9.jpg";
import oilImg from "../assets/4.oil.png";
import logisticsImg from "../assets/3.logistics.jpg";
import realEstateImg from "../assets/5.realestate.jpg";
import rentalImg from "../assets/6.rental.jpg";

const services = [
  {
    title: "Construction",
    description:
      "We deliver durable infrastructure through innovation, safety, and precision engineering for modern needs.",
    image: constructionImg,
    link: "/construction",
  },
  {
    title: "Mining",
    description:
      "Efficient and responsible mineral extraction powered by cutting-edge technology and environmental care.",
    image: miningImg,
    link: "/mining",
  },
  {
    title: "Oil & Gas",
    description:
      "Reliable pipeline, plant, and civil construction solutions supporting energy operations across the region.",
    image: oilImg,
    link: "/oil",
  },
  {
    title: "Logistics",
    description:
      "We move your resources seamlessly with dependable fleet management and optimized transport solutions.",
    image: logisticsImg,
    link: "/logistics",
  },
  {
    title: "Real Estate",
    description:
      "Designing and developing sustainable, functional spaces that inspire both productivity and comfort.",
    image: realEstateImg,
    link: "/realestate",
  },
  {
    title: "Equipment Rental",
    description:
      "Providing high-performance machines and tools to keep your projects running smoothly and efficiently.",
    image: rentalImg,
    link: "/rental",
  },
];

export default function OurServices() {
  return (
    <div className="services-page">

      {/* HERO SECTION */}
      <section className="services-hero">
        <h1>Our Expertise, Your Success</h1>

        <p>
          NAGG Group provides comprehensive solutions across construction, mining,
          oil & gas, logistics, real estate, and equipment rental — driven by
          innovation, quality, and reliability.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-img" />

            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>

              <Link to={service.link} className="service-link">
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
