import React from "react";
import "./sgr.css";

import sgr1 from "../assets/sgr1.jpg";
import sgr2 from "../assets/sgr2.jpg";
import sgr3 from "../assets/sgr3.jpg";
import sgr4 from "../assets/sgr4.jpg";
import sgr5 from "../assets/sgr5.jpg";
import sgr6 from "../assets/sgr6.jpg";
import sgr7 from "../assets/sgr7.jpg";
import sgr8 from "../assets/sgr8.jpg";
import sgr9 from "../assets/sgr9.jpg";
import sgr10 from "../assets/sgr10.jpg";
import sgr11 from "../assets/sgr11.jpg";
import sgr12 from "../assets/sgr12.jpg";
import sgr13 from "../assets/sgr13.jpg";
import sgr14 from "../assets/sgr14.jpg";

// PROJECT IMAGES
import mainSgrAlignment from "../assets/mainsgralignment.png";
import electricFenceTrc2 from "../assets/prooffencelot2.png";
import electricFenceSgr1 from "../assets/prooffencelot2.png";
import mcypAccessRoad from "../assets/mcpy6.png";
import temporaryAccessRoad from "../assets/mcpy6.png";

function SGR() {
  const projectCards = [
    {
      title: "Construction of Main SGR Alignment",
      image: mainSgrAlignment,
      year: "2023",
      status: "Ongoing",
      description:
        "Our team is delivering full civil works for the SGR main alignment, including embankment formation, drainage systems, and structural reinforcements. This project also involves precision earthworks and strict compliance with international railway standards.",
    },
    {
      title: "Construction of Electric Proof Fence (TRC Lot-2)",
      image: electricFenceTrc2,
      year: "2023",
      status: "Ongoing",
      description:
        "This project involves installation of high-security electric fencing across TRC Lot-2. It includes surveying, alignment marking, steel post installation, and advanced energizer systems for full operational reliability.",
    },
    {
      title: "Construction of Electric Proof Fence (SGR Lot-01)",
      image: electricFenceSgr1,
      year: "2023",
      status: "Ongoing",
      description:
        "We are constructing specialized electric fencing for SGR Lot-01, integrating anti-intrusion technology and long-distance power delivery systems for rail-side protection.",
    },
    {
      title: "Construction of Access Road at MCPY6 (EACOP)",
      image: mcypAccessRoad,
      year: "2023",
      status: "Ongoing",
      description:
        "This project covers access road construction within the MCPY6 area including grading, compaction, drainage works, and gravel pavement for heavy-duty logistics operations.",
    },
    {
      title:
        "Construction of Temporary Access Road from MCPY6 to PS3 (EACOP)",
      image: temporaryAccessRoad,
      year: "2022",
      status: "Completed",
      description:
        "A crucial temporary access route enabling EACOP logistics movement between MCPY6 and PS3. Works included clearing, shaping, drainage creation and full gravel surfacing.",
    },
  ];

  const sgrImages = [
    sgr1, sgr2, sgr3, sgr4, sgr5, sgr6, sgr7,
    sgr8, sgr9, sgr10, sgr11, sgr12, sgr13, sgr14
  ];

  return (
    <div className="projects-wrapper">
      {/* PAGE HEADING */}
      <h1 className="projects-heading">Standard Gauge Railway (SGR) Projects</h1>
      <div className="text-gray-800 text-lg sm:text-xl space-y-1 text-center">
          <p>The Standard Gauge Railway (SGR) is one of Tanzania’s most important infrastructure developments, and NAGG Group is proud to support its progress. Our work includes main alignment construction, access roads, electric security fencing, and key supporting infrastructure across multiple SGR lots.</p>
          <p><strong>Client:</strong>TRC</p>
          <p><strong>Location:</strong>Tanzania</p>
          <p><strong>Year:</strong> 2024</p>
          <p>These below are some of the side projects that have been done along the way of the completion of the SGR railway.</p>
        </div>

      {/* PROJECT CARDS */}
      <div className="projects-gallery">
        {projectCards.map((proj, index) => (
          <div className="project-frame" key={index}>
            <img src={proj.image} alt={proj.title} className="project-img" />

            <div className="hover-info">
              <h3>{proj.title}</h3>
              <p><strong>Status:</strong> {proj.status}</p>
              <p><strong>Year:</strong> {proj.year}</p>
              <p className="description-text">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SGR IMAGES SECTION */}
      <h2 className="projects-heading" style={{ marginTop: "3rem" }}>
        SGR Gallery
      </h2>

      <div className="projects-gallery">
        {sgrImages.map((img, idx) => (
          <div className="project-frame" key={idx}>
            <img src={img} alt={`SGR Image ${idx + 1}`} className="project-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SGR;
