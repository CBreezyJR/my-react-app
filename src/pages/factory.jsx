import React from "react";
import factoryEquipment from "../assets/logistics02.jpg";
import "./factory.css";

function Factory() {
  return (
    <div className="factory-page">
      {/* Title */}
      <h1 className="factory-title">
        Machinery & Factory Equipment Transportation for Itracom Fertilizers Ltd
      </h1>

      {/* Image */}
      <div className="factory-image-container">
        <img
          src={factoryEquipment}
          alt="Factory Equipment Transport"
          className="factory-image"
        />
      </div>

      {/* Project Details */}
      <div className="factory-details">
        <p><strong>Category:</strong> Transport</p>
        <p><strong>Status:</strong> Ongoing</p>
        <p><strong>Year:</strong> 2023</p>
      </div>

      {/* Development Message */}
      <div className="factory-message">
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

export default Factory;
