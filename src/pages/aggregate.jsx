import React from "react";
import aggregateTransport from "../assets/aggregatetransport.png";
import "./aggregate.css";

function Aggregate() {
  return (
    <div className="aggregate-page">
      {/* Title */}
      <h1 className="aggregate-title">
        Aggregate Transportation for Yapi Merkezi (LOT 2 SGR)
      </h1>

      {/* Image */}
      <div className="aggregate-image-container">
        <img
          src={aggregateTransport}
          alt="Aggregate Transportation"
          className="aggregate-image"
        />
      </div>

      {/* Project Details */}
      <div className="aggregate-details">
        <p><strong>Category:</strong> Transport</p>
        <p><strong>Freight:</strong> 20 Trucks</p>
        <p><strong>Status:</strong> Ongoing</p>
        <p><strong>Year:</strong> 2023</p>
      </div>

      {/* Development Message */}
      <div className="aggregate-message">
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

export default Aggregate;
