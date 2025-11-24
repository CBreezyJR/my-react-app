import React from "react";
import "./footer.css";
import logo from "../assets/7.logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO + ABOUT */}
        <div className="footer-section">
          <img src={logo} alt="NAGG Group Logo" className="footer-logo" />
          <p className="footer-about">
            NAGG Group. Perfection is the Goal.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/our-projects">Our Projects</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="footer-section">
          <h3>Contact Information</h3>

          <p>
            Wazo Road, Mkanada<br />
            PO Box 10250, Dar es Salaam, Tanzania
          </p>

          <p><strong>Branches:</strong></p>
          <ul className="footer-branch-list">
            <li>Dodoma: Opposite Martin Luther King School</li>
            <li>Tabora: Cheyo Airport Road</li>
            <li>Kahama: Opposite Kahama Airport</li>
          </ul>

          <p><strong>Phone:</strong> +255710333666, +255745999995</p>

          <p>
            <strong>Email:</strong><br />
            <a href="mailto:info@nagggroup.co.tz">info@nagggroup.co.tz</a><br />
            <a href="mailto:md@nagggroup.co.tz">md@nagggroup.co.tz</a><br />
            <a href="mailto:nabeel@nagggroup.co.tz">nabeel@nagggroup.co.tz</a>
          </p>

          <p>
            <strong>Instagram:</strong><br />
            <a 
              href="https://instagram.com/nagg_group" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              @nagg_group
            </a>
          </p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NAGG Group. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
