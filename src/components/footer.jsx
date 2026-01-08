import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/7.logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">

        {/* LOGO + ABOUT */}
        <div className="footer-brand">
          <img src={logo} alt="NAGG Logo" className="footer-logo" />

          <p className="footer-description">
            NAGG Group — Delivering excellence in Construction, Mining, Logistics,
            Real Estate, and Oil & Gas across East Africa.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Dar es Salaam, Tanzania</p>
          <p>Email: info@nagg.co.tz</p>
          <a href="https://wa.me/255745999995">Phone: +255 745 999 995</a>
        </div>

        {/* SOCIALS */}
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">

            <a href="https://instagram.com/nagg_group" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://x.com/onenagg?s=11" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>

            <a href="https://wa.me/255745999995" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>

            <a href="https://www.linkedin.com/in/onenagg-group-5104a4362" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NAGG Group. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
