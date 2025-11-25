import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* HERO VIDEO SECTION */}
      <section className="contact-video-hero">
        <video
          className="contact-hero-video"
          src="/src/assets/8.homebg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Reach out to NAGG Group for inquiries, partnerships, or project support.</p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <div className="contact-container">

        {/* Address / Info Sections */}
        <section className="contact-section">
          <h2>Headquarters</h2>
          <p>Wazo Road, Mkanada, PO Box 22, Dar es Salaam, Tanzania</p>
        </section>

        <section className="contact-section">
          <h2>Branches</h2>
          <ul>
            <li>Dodoma: Opposite Martin Luther King School</li>
            <li>Tabora: Cheyo Airport Road</li>
            <li>Kahama: Opposite Kahama Airport</li>
          </ul>
        </section>

        <section className="contact-section">
          <h2>Contact Numbers</h2>
          <p>+255745999995</p>
        </section>

        <section className="contact-section">
          <h2>Email Addresses</h2>
          <p>
            General Inquiries: <a href="mailto:info@nagggroup.co.tz">info@nagggroup.co.tz</a><br />
          </p>
        </section>

        <section className="contact-section">
          <h2>Social Media</h2>
          <p>
            Instagram: <a href="https://instagram.com/nagg_group" target="_blank" rel="noopener noreferrer">@nagg_group</a>
          </p>
        </section>

        {/* Keep in Touch Form */}
        <section className="contact-section">
          <h2>Keep in Touch</h2>
          <p>
            Fill out our online form to request an estimate or for general questions about our services. We look forward to serving you!
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Full Name *" required />
            <input type="email" placeholder="Email Address *" required />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>

        {/* Google Map */}
        <section className="contact-section">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2133.9796305985556!2d39.181964490386676!3d-6.6664332470600405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c51003df46313%3A0xad9ae54da9baf010!2sNAGG%20GROUP%20HQ!5e0!3m2!1sen!2stz!4v1763635151802!5m2!1sen!2stz"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;
