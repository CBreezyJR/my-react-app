import React from "react";
import "./bahi.css";

// Images
import bahi1 from "../assets/bahi1.jpg";
import bahi2 from "../assets/bahi2.jpg";
import bahi4 from "../assets/bahi4.jpg";
import bahi5 from "../assets/bahi5.jpg";

// Videos
import bahi01 from "../assets/bahi01.mp4";
import bahi02 from "../assets/bahi02.mp4";
import bahi03 from "../assets/bahi03.mp4";

function Bahi() {
  return (
    <div className="bahi-page">
      <h1 className="bahi-title">Bahi Stone Quarry & Crusher Plant (Aggregate Production)</h1>

      <p className="bahi-description">
        Located in Bahi, Dodoma, this quarry produces high-quality aggregates used by major
        contractors including CRJE, SUMA JKT, CSWS, and Yapi Merkezi (SGR Lots 2 & 3).
        Our operations ensure consistent production of 0–5mm, 5–15mm, and 15–25mm aggregates.
      </p>

      {/* Project Details */}
      <div className="bahi-details">
        <p><strong>Category:</strong> Mining</p>
        <p><strong>Location:</strong> Bahi, Dodoma</p>
        <p><strong>Materials:</strong> Aggregates 0–5mm, 5–15mm, 15–25mm</p>
        <p><strong>Clients:</strong> CRJE, SUMA JKT, CSWS, Yapi Merkezi</p>
        <p><strong>Status:</strong> Ongoing</p>
        <p><strong>Year:</strong> 2023</p>
      </div>

      {/* Images */}
      <div className="bahi-gallery">
        {[bahi1, bahi2, bahi4, bahi5].map((img, i) => (
          <img key={i} src={img} alt={`Bahi Quarry ${i + 1}`} className="bahi-img" />
        ))}
      </div>

      {/* Description under Image 4 */}
      <div className="bahi-plan">
        <h2>Quarry Production Plan</h2>

        <p>
          1. Blaster advised beginning with border blasting for the 9-meter pit zone.
          Some of the compressor-drilled holes from previous work are ready for detonation.
          This blast will generate material needed to continue production.
        </p>

        <p><strong>Border Blasting Materials:</strong></p>
        <ul>
          <li>Superpower (V6): Add 1 extra box (current box has absorbed moisture)</li>
          <li>Nitrate: To be boosted with 20 liters of diesel</li>
          <li>Detonators & fuses: Available</li>
          <li>Detonating cord: Available</li>
        </ul>

        <p>
          2. For the 6-meter holes that collapsed, more than 80 holes remain usable,
          but they are widely spaced. Additional 3-meter drilling using the compressor will be
          done to recover borders and blasting materials (estimated 5 days of work).
        </p>

        <p>
          3. For the large rock formation, the blaster recommends drilling from the top because
          it contains many cracks. This requires careful step-by-step blasting to break the 
          rock into manageable pieces and create stock.
        </p>
      </div>

      {/* Videos */}
      <div className="bahi-videos">
        <div className="video-block">
          <video controls src={bahi01} className="bahi-video"></video>
        </div>

        <div className="video-block">
          <video controls src={bahi02} className="bahi-video"></video>
          <p className="video-note">We are still in production.</p>
        </div>

        <div className="video-block">
          <video controls src={bahi03} className="bahi-video"></video>
        </div>
      </div>
    </div>
  );
}

export default Bahi;
