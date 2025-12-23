import React, { useEffect, useRef } from "react";
import "./whatwedo.css";

import operations from "../assets/operation02.png";
import safety from "../assets/safety.jpg";
import quality from "../assets/marine.png";
import efficiency from "../assets/efficiency.jpg";
import innovation from "../assets/innovation.jpg";
import customer from "../assets/customer.jpg";
import environment from "../assets/environment.jpg";
import employees from "../assets/employment02.png";

const roles = [
  {
    title: "Operational Excellence",
    description:
      "We deliver projects with precision and efficiency — ensuring every milestone meets quality, budget, and timeline standards. Our structured processes and continuous improvement methods keep every operation running at peak performance.",
    image: operations,
  },
  {
    title: "Health and Safety",
    description:
      "We uphold a zero-harm policy by fully complying with Tanzania’s Occupational Safety Act No.05 of 2003. Safety is embedded in every step — from design to delivery — creating a culture where everyone looks out for one another.",
    image: safety,
  },
  {
    title: "Quality Management",
    description:
      "Our quality systems ensure reliability and consistency. Every process is benchmarked against international standards to guarantee lasting results and total client satisfaction.",
    image: quality,
  },
  {
    title: "Efficiency & Cost Management",
    description:
      "We emphasize resource optimization — maximizing productivity while minimizing costs. Through smart planning and innovation, we achieve efficiency without compromise.",
    image: efficiency,
  },
  {
    title: "Innovation & Technology Integration",
    description:
      "We integrate modern technologies and data-driven approaches to deliver cutting-edge solutions. This helps us maintain agility and competitiveness in every project.",
    image: innovation,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Our clients are partners in progress. We deliver with transparency, responsiveness, and dedication — exceeding expectations at every phase of the project.",
    image: customer,
  },
  {
    title: "Environmental Sustainability",
    description:
      "We implement eco-friendly solutions that reduce impact and promote sustainability. From waste reduction to energy conservation, we’re committed to protecting the planet.",
    image: environment,
  },
  {
    title: "Employee Development",
    description:
      "We invest in our people through mentoring, continuous learning, and professional growth. Our team’s excellence drives the company’s long-term success.",
    image: employees,
  },
];

export default function WhatWeDo() {
  const titleRef = useRef(null);
  const typed = useRef(false);

  useEffect(() => {
    if (typed.current) return;
    typed.current = true;

    const title = titleRef.current;
    const text = "OUR PRINCIPLES";
    let i = 0;
    title.textContent = "";

    const type = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };
    type();
  }, []);

  return (
    <div className="whatwedo-page">
      <h1 ref={titleRef} className="main-title"></h1>
      <div className="roles-grid">
        {roles.map((role, index) => (
          <div className="role-card" key={index}>
            <img src={role.image} alt={role.title} className="role-image" />
            <h2 className="role-title">{role.title}</h2>
            <p className="role-description">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
