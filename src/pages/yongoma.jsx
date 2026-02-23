import React from "react";

import y1 from "../assets/yongoma1.jpeg";
import y2 from "../assets/yongoma2.jpeg";
import y3 from "../assets/yongoma3.jpeg";
import y4 from "../assets/yongoma4.jpeg";
import y5 from "../assets/yongoma5.jpeg";
import y6 from "../assets/yongoma6.jpeg";
import y7 from "../assets/yongoma7.jpeg";
import y8 from "../assets/yongoma8.jpeg";
import y9 from "../assets/yongoma9.jpeg";
import y10 from "../assets/yongoma10.jpeg";
import y11 from "../assets/yongoma11.jpeg";
import y12 from "../assets/yongoma12.jpeg";
import y13 from "../assets/yongoma13.jpeg";
import y14 from "../assets/yongoma14.jpeg";
import y15 from "../assets/yongoma15.jpeg";

function Yongoma() {
  const images = [
    y1, y2, y3, y4, y5,
    y6, y7, y8, y9, y10,
    y11, y12, y13, y14, y15
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">

      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Construction of Yongoma Dam
        </h1>
        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
      </div>

      {/* Project Details */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <p><span className="font-semibold">Category:</span> Construction</p>
          <p><span className="font-semibold">Contract:</span> In Progress</p>
          <p><span className="font-semibold">Status:</span> Ongoing</p>
          <p><span className="font-semibold">Year:</span> 2026-Present</p>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-700 leading-relaxed mb-4">
          The Yongoma Dam project is currently underway, strengthening regional
          water infrastructure and supporting long-term community development.
          Our team is actively executing construction works, including earthworks,
          structural development, and associated water management systems.
        </p>
        <p className="text-gray-600 italic">
          We continue to deliver this project with strict adherence to quality,
          safety, and environmental standards.
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={img}
              alt={`Yongoma Dam ${index + 1}`}
              className="w-full h-60 sm:h-64 md:h-48 lg:h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Yongoma;