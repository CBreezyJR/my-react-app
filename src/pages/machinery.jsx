import React from "react";
import machineryMobilization from "../assets/logistics02.jpg";
import "./machinery.css";

function Machinery() {
  return (
    <div className="machinery-page">
      {/* Title */}
      <h1 className="machinery-title">
        Machinery Mobilization for Osman CAMCI Company Ltd
      </h1>

      {/* Image */}
      <div className="machinery-image-container">
        <img
          src={machineryMobilization}
          alt="Machinery Mobilization"
          className="machinery-image"
        />
      </div>

      {/* Project Details */}
      <div className="machinery-details">
        <p><strong>Category:</strong> Transport</p>
        <p><strong>Route:</strong> Zuzu, Dodoma to Tabora (Lot 3 Camp)</p>
        <p><strong>Status:</strong> Ongoing</p>
        <p><strong>Year:</strong> 2023</p>
      </div>

      {/* Development Message */}
      <div className="machinery-message">
        <p>
          This page is currently under development. Full project details,
          images, and documentation will be added soon.
        </p>
        <p className="italic">
          Our team is preparing the full content and will update this section
          once all assets are finalized.
        </p>
      </div>
    </div>
  );
}

export default Machinery;
