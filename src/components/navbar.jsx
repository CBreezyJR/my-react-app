import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/7.logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
  
    const handleScroll = () => {
      const currentScroll = window.scrollY;
  
      if (currentScroll > lastScrollY) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
  
      lastScrollY = currentScroll;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  
  

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="NAGG Logo" className="logo-img" />
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {[
            ["Home", "/"],
            ["What We Do", "/what-we-do"],
            ["Our Services", "/our-services"],
            ["Our Projects", "/our-projects"],
            ["About Us", "/about-us"],
            ["Our Team", "/our-team"],
            ["Contact", "/contact-us"],
          ].map(([name, path]) => (
            <li key={name}>
              <Link
                to={path}
                className={location.pathname === path ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
