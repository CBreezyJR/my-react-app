import React from "react";

import n1 from "../assets/nditi1.jpg";
import n2 from "../assets/nditi2.jpg";
import n3 from "../assets/nditi3.jpg";
import n4 from "../assets/nditi4.jpg";
import n5 from "../assets/nditi5.jpg";
import n6 from "../assets/nditi6.jpg";
import n7 from "../assets/nditi7.jpg";
import n9 from "../assets/nditi9.jpg";
import n10 from "../assets/nditi10.jpg";

function Nditi() {
  const images = [n1, n2, n3, n4, n5, n6, n7, n9, n10];

  return (
    <div className="nditi-page bg-gray-50 min-h-screen max-w-7xl mx-auto px-4 py-12">
      {/* Project Content */}
      <div className="nditi-content mb-10 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nickel Mining – Nditi
        </h1>

        <p className="text-gray-700 mb-4">
          This project focuses on the exploration, excavation, and extraction of
          nickel ore in Nditi. Our mining team is deployed with modern machinery, safety systems, and optimized site operations.
        </p>

        <p className="text-gray-700 mb-6">
          The project is ongoing and contributes significantly to the national
          demand for mineral resources.
        </p>

        <ul className="project-details list-disc list-inside text-gray-800 space-y-1">
          <li><strong>Location:</strong> Nditi, Tanzania</li>
          <li><strong>Material:</strong> Nickel</li>
          <li><strong>Status:</strong> Ongoing</li>
          <li><strong>Year:</strong> 2023</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="nditi-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`Nditi ${index + 1}`}
              className="w-full h-60 object-cover transform transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nditi;
