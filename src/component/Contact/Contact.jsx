import React, { useState } from "react";
import Nav from "../nav/Nav";
import "./contact.css";
import Foot from "../footer/foot";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Nav />
      <div className="contact-wrapper">
        <div className="contact-hero">
          <div className="hero-decoration">
            <div className="deco-circle circle-1"></div>
            <div className="deco-circle circle-2"></div>
          </div>
          
          <div className="contact-container">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span>Let's Connect</span>
            </div>
            
            <h1 className="contact-title">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            
            <p className="contact-subtitle">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="contact-content-section">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-info-section">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-description">
                  Feel free to reach out through any of these channels.
                </p>

                <div className="info-cards">
                  <div className="info-card">
                    <div className="info-icon">📧</div>
                    <div className="info-content">
                      <h3>Email</h3>
                      <p>sujal@example.com</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">📱</div>
                    <div className="info-content">
                      <h3>Phone</h3>
                      <p>+977 98XXXXXXXX</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <h3>Location</h3>
                      <p>Kathmandu, Nepal</p>
                    </div>
                  </div>
                </div>

                <div className="social-section">
                  <h3 className="social-title">Follow Me</h3>
                  <div className="social-links">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-form-section">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h2>Send Me a Message</h2>
                    <p>I'll get back to you as soon as possible</p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <span className="btn-icon">✉️</span>
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="map-section">
          <div className="map-content">
            <h3>📍 Based in Kathmandu, Nepal</h3>
            <p>Available for remote work worldwide</p>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Contact;