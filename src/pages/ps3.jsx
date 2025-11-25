import React from "react";
import p1 from "../assets/ps31.jpg";
import p2 from "../assets/ps32.jpg";
import p3 from "../assets/ps33.jpg";
import p4 from "../assets/ps34.jpg";
import p5 from "../assets/ps35.jpg";
import p6 from "../assets/ps36.jpg";
import p7 from "../assets/ps37.jpg";
import p8 from "../assets/ps38.jpg";
import p9 from "../assets/ps39.jpg";
import p10 from "../assets/ps310.jpg";

function PS3() {
  const images = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Project Info */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Construction of Pump Station (PS-3)
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl mb-4 text-center">
          Part of the East African Crude Oil Pipeline project, the Pump Station
          3 construction showcases NAGG Group’s technical strength in oil and
          gas infrastructure. This facility supports efficient and safe crude
          oil transfer along the EACOP route.
        </p>
        <p className="text-gray-700 text-lg sm:text-xl mb-4 text-center">
          Our team is delivering comprehensive civil, mechanical, and electrical
          works, ensuring alignment with international energy standards and
          safety regulations.
        </p>
        <div className="text-gray-800 text-lg sm:text-xl space-y-1 text-center">
          <p><strong>Client:</strong> East African Crude Oil Pipeline (EACOP)</p>
          <p><strong>Location:</strong> Kahama, Tanzania</p>
          <p><strong>Year:</strong> 2024</p>
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={img} 
              alt={`PS3 ${index + 1}`} 
              className="w-full h-60 sm:h-64 md:h-48 lg:h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PS3;
