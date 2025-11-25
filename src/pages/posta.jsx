import React from "react";
import posta1 from "../assets/posta1.jpg";
import posta2 from "../assets/posta2.jpg";
import posta3 from "../assets/posta3.jpg";
import posta4 from "../assets/posta4.jpg";
import posta5 from "../assets/posta5.jpg";
import posta6 from "../assets/posta6.jpg";
import posta7 from "../assets/posta7.jpg";
import posta8 from "../assets/posta8.jpg";
import posta9 from "../assets/posta9.jpg";
import posta10 from "../assets/posta10.jpg";

function Posta() {
  const images = [
    posta1, posta2, posta3, posta4, posta5,
    posta6, posta7, posta8, posta9, posta10,
  ];

  return (

    <div className="pt-20 bg-gray-50 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Project Text */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Construction of Posta House
        </h1>
        <p className="text-gray-700 mb-4">
          The Posta House project represents NAGG Group’s commitment to modern
          urban infrastructure in Tanzania. This commercial building blends
          contemporary architecture with sustainable engineering practices,
          offering a robust space for commercial offices and public operations.
        </p>
        <p className="text-gray-700 mb-4">
          Our team is currently overseeing every stage of construction, ensuring structural
          integrity, design precision, and environmental compliance. The project is
          also demonstrating our proficiency in integrating advanced building
          systems while maintaining time and cost efficiency.
        </p>
        <p className="text-gray-700 mb-1"><strong>Client:</strong> Tanzania Posts Corporation</p>
        <p className="text-gray-700 mb-1"><strong>Location:</strong> Dar es Salaam, Tanzania</p>
        <p className="text-gray-700"><strong>Year:</strong> 2024</p>
      </div>

      {/* Project Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`Posta ${index + 1}`}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posta;
