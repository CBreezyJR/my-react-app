import React from "react";
import yapiTransport from "../assets/yapitransportation.jpg";
import "./yapi.css";

function YapiTransport() {
  return (
    <div className="yapi-page">
      {/* Title */}
      <h1 className="yapi-title">
        Transporting Machinery & Containers for Yapi Merkezi (SGR Lots 2 & 3)
      </h1>

      {/* Image */}
      <div className="yapi-image-container">
        <img
          src={yapiTransport}
          alt="Yapi Transport"
          className="yapi-image"
        />
      </div>

      {/* Project Details */}
      <div className="yapi-details">
        <p><strong>Category:</strong> Transport</p>
        <p><strong>Contract:</strong> 5 years</p>
        <p><strong>Status:</strong> Ongoing</p>
        <p><strong>Year:</strong> 2023</p>
      </div>

      {/* Development Message */}
      <div className="yapi-message">
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

export default YapiTransport;
