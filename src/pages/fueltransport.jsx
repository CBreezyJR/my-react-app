import React from "react";
import fuelTransport from "../assets/fuelcargo.jpeg";
import "./fueltransport.css";

function FuelTransport() {
  return (
    <div className="fuel-page">
      {/* Title */}
      <h1 className="fuel-title">Fuel Transportation from Dar to DRC</h1>

      {/* Image */}
      <div className="fuel-image-container">
        <img
          src={fuelTransport}
          alt="Fuel Transport"
          className="fuel-image"
        />
      </div>

      {/* Project Details */}
      <div className="fuel-details">
        <p><strong>Category:</strong> Transport</p>
        <p><strong>Client:</strong> Engen</p>
        <p><strong>Freight:</strong> 20 Tankers</p>
        <p><strong>Status:</strong> Ongoing</p>
        <p><strong>Year:</strong> 2023</p>
      </div>

      {/* Development Message */}
      <div className="fuel-message">
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

export default FuelTransport;
