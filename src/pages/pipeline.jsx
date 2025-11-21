import React from "react";
import "./pipeline.css";

import eacop1 from "../assets/eacop1.jpg";
import eacop2 from "../assets/eacop2.jpg";
import eacop3 from "../assets/eacop3.jpg";
import eacop4 from "../assets/eacop4.jpg";
import eacop5 from "../assets/eacop5.jpg";
import eacop6 from "../assets/eacop6.jpg";
import eacop7 from "../assets/eacop7.jpg";
import eacop8 from "../assets/eacop8.jpg";
import eacop9 from "../assets/eacop9.jpg";
import eacop10 from "../assets/eacop10.jpg";

function Pipeline() {
  const images = [
    eacop1, eacop2, eacop3, eacop4, eacop5,
    eacop6, eacop7, eacop8, eacop9, eacop10
  ];

  return (
    <div className="pipeline-page">
      <div className="pipeline-container">
        <h1 className="pipeline-title">Installation of Pipeline and Civil Works (EACOP)</h1>
        <p className="pipeline-description">
          This page details the pipeline construction project for the East African Crude Oil Pipeline (EACOP).
          The project includes extensive civil works, pipeline installation, and site preparation across multiple locations.
        </p>
        <p className="marine-info"><strong>Client:</strong> EACOP</p>
        <p className="marine-info"><strong>Location:</strong> Tanzania</p>
        <p className="marine-info"><strong>Year:</strong>2025-January</p>
        <div className="pipeline-images">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`EACOP ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pipeline;
