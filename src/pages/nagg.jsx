import React from "react";
import naggTransport from "../assets/naggtransportation.png";
import "./nagg.css";

function Nagg() {
  return (
    <div className="nagg-page">
      {/* Title */}
      <h1 className="nagg-title">
        Transporting Machinery & Equipment for NAGG Mining & Construction
      </h1>

      {/* Placeholder Image */}
      <div className="nagg-image-container">
        <img
          src={naggTransport}
          alt="NAGG Transport"
          className="nagg-image"
        />
      </div>

      {/* Development Message */}
      <div className="nagg-message">
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

export default Nagg;
