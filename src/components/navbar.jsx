import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../assets/nagglogo.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [showNav, setShowNav] = useState(true);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "SW" : "EN"));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // Only show when at the very top
        setShowNav(true);
      } else {
        // Hide when scrolled down
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Logo */}
      <img
        src={Logo}
        alt="NAGG GROUP Logo"
        className={`nav-logo ${showNav ? "show" : "hide"}`}
      />

      {/* Floating Hamburger */}
      <button
        className={`hamburger ${open ? "open" : ""} ${showNav ? "show" : "hide"}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Half-Page Overlay */}
      <div className={`overlay ${open ? "show" : ""}`}>
        <div className="overlay-content">
          {/* NAVIGATION LINKS */}
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/principles">Our Principles</Link>
          <Link onClick={() => setOpen(false)} to="/what-we-do">What We Do</Link>
          <Link onClick={() => setOpen(false)} to="/our-projects">Our Projects</Link>
          <Link onClick={() => setOpen(false)} to="/about-us">About Us</Link>
          <Link onClick={() => setOpen(false)} to="/sustainability">Sustainability</Link>
          <Link onClick={() => setOpen(false)} to="/our-team">Our Team</Link>
          <Link onClick={() => setOpen(false)} to="/contact-us">Contact Us</Link>

          {/* LANGUAGE TOGGLE INSIDE OVERLAY */}
          <button className="lang-toggle" onClick={toggleLanguage}>
            {language === "EN" ? "SW" : "EN"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
