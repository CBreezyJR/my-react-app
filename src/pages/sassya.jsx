import React from "react";

import s1 from "../assets/sassya1.jpg";
import s2 from "../assets/sassya2.jpg";
import s3 from "../assets/sassya3.jpg";
import s4 from "../assets/sassya4.jpg";
import s5 from "../assets/sassya5.jpg";

function Sassya() {
  const images = [s1, s2, s3, s4, s5];

  return (
    <div className="sassya-page bg-gray-50 min-h-screen max-w-7xl mx-auto px-4 py-12">
      
      {/* Content */}
      <div className="sassya-content mb-12 text-gray-800">
        <h1 className="sassya-title text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Nickel Ore Mining Services for Sassya Investment Ltd.
        </h1>

        <p className="mb-4">
          NAGG Group is providing Nickel Ore Mining services for Sassya Investment Ltd. 
          The project involves mobilization of machinery, personnel, and operational infrastructure 
          to support long-term mineral extraction activities.
        </p>

        <p className="mb-4">
          This project demonstrates our capacity to support industrial mining operations 
          aligned with safety, environmental compliance, and high-efficiency extraction standards.
        </p>

        <ul className="project-details list-disc list-inside mt-4 text-gray-700">
          <li><strong>Location:</strong> Dodoma, Tanzania</li>
          <li><strong>Status:</strong> Mobilization Process</li>
          <li><strong>Year:</strong> 2023</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="sassya-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Sassya Mining ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Sassya;
