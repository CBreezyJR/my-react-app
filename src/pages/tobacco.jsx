import React from "react";
import t1 from "../assets/tobacco1.jpg";
import t2 from "../assets/tobacco2.jpg";
import t3 from "../assets/tobacco3.jpg";
import t4 from "../assets/tobacco4.jpg";
import t5 from "../assets/tobacco5.jpg";
import t6 from "../assets/tobacco6.jpg";
import t7 from "../assets/tobacco7.jpg";
import t8 from "../assets/tobacco8.jpg";
import t9 from "../assets/tobacco9.jpg";
import t10 from "../assets/tobacco10.jpg";

function Tobacco() {
  const images = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Project Info */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Construction of Mastermind Tobacco Factory
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl mb-4 text-center">
          This industrial facility is being designed and constructed for Mastermind
          Tobacco Tanzania. NAGG Group is currently delivering a modern manufacturing plant
          that integrates sustainable energy use, optimized workflow, and
          high-standard safety systems.
        </p>
        <p className="text-gray-700 text-lg sm:text-xl mb-4 text-center">
          The project reflects our commitment to industrial innovation — from
          foundation design to mechanical, electrical, and HVAC installations.
        </p>
        <div className="text-gray-800 text-lg sm:text-xl space-y-1 text-center">
          <p><strong>Client:</strong> Mastermind Tobacco Tanzania</p>
          <p><strong>Location:</strong> Bagamoyo, Tanzania</p>
          <p><strong>Year:</strong> 2025</p>
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={img}
              alt={`Tobacco ${index + 1}`}
              className="w-full h-60 sm:h-64 md:h-48 lg:h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tobacco;
