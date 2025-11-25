import React from "react";

import d1 from "../assets/dom1.jpg";
import d2 from "../assets/dom2.jpg";
import d3 from "../assets/dom3.jpg";
import d4 from "../assets/dom4.jpg";
import d5 from "../assets/dom5.jpg";
import d6 from "../assets/dom6.jpg";
import d7 from "../assets/dom7.jpg";

function Dodoma() {
  const images = [d1, d2, d3, d4, d5, d6, d7];

  return (
    <div className="dodoma-page bg-gray-50 min-h-screen px-4 py-12 max-w-7xl mx-auto">
      
      {/* Content */}
      <div className="dodoma-content mb-12 text-gray-800">
        <h1 className="dodoma-title text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Nickel Ore Mining Services for Progressive Metallic Minerals Co. Ltd
        </h1>

        <p className="mb-4">
          This mining project involves professional extraction and processing support 
          for Nickel Ore operations in Dodoma, Tanzania. NAGG Group delivers a full scope 
          of mining solutions including site preparation, excavation, material handling, 
          and logistical support.
        </p>

        <p className="mb-4">
          It reflects our continued commitment to operational 
          efficiency, safety, and sustainable mining practices.
        </p>

        <ul className="project-details list-disc list-inside mt-4 text-gray-700">
          <li><strong>Location:</strong> Dodoma, Tanzania</li>
          <li><strong>Status:</strong> Completed</li>
          <li><strong>Year:</strong> 2022</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="dodoma-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Dodoma Nickel Mining ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Dodoma;
