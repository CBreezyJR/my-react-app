import React from "react";
import "./yongoma.css";

function Yongoma() {
  return (
    <div className="yongoma-page">
      {/* Title */}
      <h1 className="yongoma-title">
        Construction of Yongoma Dam
      </h1>

     

      {/* Project Details */}
      <div className="yongoma-details">
        <p><strong>Category:</strong>Construction</p>
        <p><strong>Contract:</strong>In the Process</p>
        <p><strong>Status:</strong> TBA</p>
        <p><strong>Year:</strong>Null</p>
      </div>

      {/* Development Message */}
      <div className="yongoma-message">
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

export default Yongoma;
