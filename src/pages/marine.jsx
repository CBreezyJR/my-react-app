import React from "react";
import "./marine.css";

import m1 from "../assets/marine1.jpg";
import m2 from "../assets/marine2.jpg";
import m3 from "../assets/marine3.jpg";
import m5 from "../assets/marine5.jpg";
import m6 from "../assets/marine6.jpg";
import m7 from "../assets/marine7.jpg";
import m8 from "../assets/marine8.jpg";
import m9 from "../assets/marine9.jpg";
import m10 from "../assets/marine10.jpg";

function Marine() {
  const images = [m1, m2, m3, m5, m6, m7, m8, m9, m10];

  return (
    <div className="marine-page">
      <div className="marine-container">
        <h1 className="marine-title">Construction of Marine Terminal Tank</h1>

        <p className="marine-text">
          This marine terminal tank project was executed for the East African Crude
          Oil Pipeline (EACOP). The project includes heavy civil works, tank
          foundation structures, safety integrations, and pipeline interface
          preparations.
        </p>

        <p className="marine-text">
          Our engineering team ensured all marine construction safety protocols,
          environmental standards, and international compliance requirements were
          fully met.
        </p>

        <p className="marine-info"><strong>Client:</strong> EACOP</p>
        <p className="marine-info"><strong>Location:</strong> Tanzania</p>
        <p className="marine-info"><strong>Year:</strong> 2024</p>
      </div>

      <div className="marine-gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Marine ${index + 1}`} className="marine-img" />
        ))}
      </div>
    </div>
  );
}

export default Marine;
