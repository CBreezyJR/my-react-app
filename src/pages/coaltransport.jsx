import React from "react";
import coalTransport from "../assets/coalmining.jpg";
import "./coaltransport.css";

function CoalTransport() {
  return (
    <div className="coaltransport-page">
      {/* Title */}
      <h1 className="coaltransport-title">
        Coal Transportation for Haathee Hauliers & Traders (T) Ltd
      </h1>

      {/* Image */}
      <div className="coaltransport-image-container">
        <img
          src={coalTransport}
          alt="Coal Transportation"
          className="coaltransport-image"
        />
      </div>

      {/* Project Details */}
      <div className="coaltransport-details">
        <p><strong>Category:</strong> Transport</p>
        <p><strong>Status:</strong> Ongoing</p>
        <p><strong>Year:</strong> 2023</p>
      </div>

      {/* Development Message */}
      <div className="coaltransport-message">
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

export default CoalTransport;
