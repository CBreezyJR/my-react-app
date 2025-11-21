import React from "react";
import cargoTransport from "../assets/cargotransportation.jpg";
import "./cargo.css";

function Cargo() {
  return (
    <div className="cargo-page">
      {/* Title */}
      <h1 className="cargo-title">
        Cargo Transportation for ASK Engineering LTD
      </h1>

      {/* Image */}
      <div className="cargo-image-container">
        <img
          src={cargoTransport}
          alt="Cargo Transportation"
          className="cargo-image"
        />
      </div>

      {/* Project Details */}
      <div className="cargo-details">
        <p><strong>Category:</strong> Transport</p>
        <p><strong>Status:</strong> Ongoing</p>
        <p><strong>Year:</strong> 2023</p>
      </div>

      {/* Development Message */}
      <div className="cargo-message">
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

export default Cargo;
