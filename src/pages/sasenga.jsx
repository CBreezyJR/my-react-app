import React from "react";
import sasenga1 from "../assets/sasenga1.jpg";
import sasenga2 from "../assets/sasenga2.jpg";
import sasenga3 from "../assets/sasenga3.jpg";
import sasenga4 from "../assets/sasenga4.jpg";
import sasenga5 from "../assets/sasenga5.jpg";
import sasenga6 from "../assets/sasenga6.jpg";
import sasenga7 from "../assets/sasenga7.jpg";
import sasenga8 from "../assets/sasenga8.jpg";
import sasenga9 from "../assets/sasenga9.jpg";
import sasenga10 from "../assets/sasenga10.jpg";

function Sasenga() {
  const images = [
    sasenga1, sasenga2, sasenga3, sasenga4, sasenga5,
    sasenga6, sasenga7, sasenga8, sasenga9, sasenga10,
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Project Info */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Sasenga Bridge Construction
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl mb-4 text-center">
          The Sasenga Bridge project was a landmark civil engineering effort
          designed to improve transportation and connectivity in rural regions.
          NAGG Group’s expertise in structural and hydraulic engineering
          delivered a bridge capable of withstanding heavy load and seasonal
          flooding.
        </p>
        <p className="text-gray-700 text-lg sm:text-xl mb-4 text-center">
          Using advanced concrete and steel systems, we ensured safety,
          durability, and longevity while keeping the environmental footprint
          minimal. The bridge now stands as a critical infrastructure link in
          the Sasenga area.
        </p>
        <div className="text-gray-800 text-lg sm:text-xl space-y-1 text-center">
          <p><strong>Client:</strong> Tanzania National Roads Agency (TANROADS)</p>
          <p><strong>Location:</strong> Kigoma, Tanzania</p>
          <p><strong>Year:</strong> 2023</p>
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={img} 
              alt={`Sasenga ${index + 1}`} 
              className="w-full h-60 sm:h-64 md:h-48 lg:h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sasenga;
