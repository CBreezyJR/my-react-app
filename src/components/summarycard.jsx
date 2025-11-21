// src/components/SummaryCard.jsx
import React from "react";
import "./summarycard.css";
import { Link } from "react-router-dom";

export default function SummaryCard({ title, description, link }) {
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="card-btn">Learn More</Link>
    </div>
  );
}
