import React from "react";

import c1 from "../assets/coal1.jpg";
import c2 from "../assets/coal2.jpg";
import c3 from "../assets/coal3.jpg";
import c4 from "../assets/coal4.jpg";
import c5 from "../assets/coal5.jpg";
import c6 from "../assets/coal6.jpg";
import c7 from "../assets/coal7.jpg";
import c8 from "../assets/coal8.jpg";
import c9 from "../assets/coal9.jpg";
import c10 from "../assets/coal10.jpg";

function Coal() {
  const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];

  return (
    <div className="coal-page bg-white min-h-screen px-4 py-12 max-w-7xl mx-auto">
      
      {/* Content */}
      <div className="coal-content mb-12 text-gray-800">
        <h1 className="coal-title text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Coal Mining, Extraction & Crushing
        </h1>

        <p className="mb-4">
          This project involves large-scale coal extraction and crushing operations 
          in Kitai, Songea. Equipped with heavy-duty machinery, our team ensures 
          efficient, safe, and high-capacity production.
        </p>

        <p className="mb-4">
          The extracted coal supplies major industrial consumers including KEDA (Kenya), 
          Simba Cement, and Lake Cement.
        </p>

        <ul className="project-details list-disc list-inside mt-4 text-gray-700">
          <li><strong>Location:</strong> Kitai, Songea</li>
          <li><strong>Material:</strong> Coal</li>
          <li><strong>Clients:</strong> KEDA (Kenya), Simba Cement, Lake Cement</li>
          <li><strong>Status:</strong> Ongoing</li>
          <li><strong>Year:</strong> 2023</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="coal-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Coal Mining ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Coal;
