// src/components/HeroSection.jsx
import React from "react";
import heroVideo from "../assets/8.homebg.mp4";
import "./section.css";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <video className="hero-video" src={heroVideo} autoPlay loop muted playsInline />
      <div className="hero-fade-overlay">
        <div className="hero-text">
          <h1>WELCOME TO NAGG GROUP</h1>
          <h2>Perfection is the goal</h2>
        </div>
      </div>
    </div>
  );
}
