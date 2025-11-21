import React from "react";
import ironOreTransport from "../assets/ironore.jpg";
import "./ironore.css";

function IronOre() {
  return (
    <div className="ironore-page">
      {/* Title */}
      <h1 className="ironore-title">
        Iron Ore Transportation for Simba Cement
      </h1>

      {/* Image */}
      <div className="ironore-image-container">
        <img
          src={ironOreTransport}
          alt="Iron Ore Transportation"
          className="ironore-image"
        />
      </div>

      {/* Project Details */}
      <div className="ironore-details">
        <p><strong>Category:</strong> Transport</p>
        <p><strong>Route:</strong> Kwedizinga to Pongwe Tanga</p>
        <p><strong>Client:</strong> In and Out Co. Ltd</p>
        <p><strong>Status:</strong> Ongoing</p>
        <p><strong>Year:</strong> 2023</p>
      </div>

      {/* Development Message */}
      <div className="ironore-message">
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

export default IronOre;
