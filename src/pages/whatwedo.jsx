import React from "react";
import { Link } from "react-router-dom";

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
    <div className="pt-32 md:pt-40 px-6 font-['Raleway']">

      {/* HERO SECTION */}
      <section className="text-center flex flex-col items-center gap-20 pb-30">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Expertise, Your Success
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          NAGG Group provides comprehensive solutions across construction,
          mining, oil & gas, logistics, real estate, and equipment rental —
          driven by innovation, quality, and reliability.
        </p>
      </section>
      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="inline-block mt-2 text-blue-600 font-medium hover:text-blue-800 transition"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}