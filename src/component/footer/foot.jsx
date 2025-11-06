import React from "react";
import "./foot.css";
import { Link } from "react-router-dom";

const Foot = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "https://www.facebook.com", label: "Facebook" },
    { icon: "fab fa-github", url: "https://github.com", label: "GitHub" },
    { icon: "fab fa-instagram", url: "https://www.instagram.com", label: "Instagram" },
    { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com", label: "LinkedIn" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="brand-name">
              Sujal<span className="brand-dot">.</span>
            </h2>
            <p className="brand-tagline">
              Front-End Developer & Creative Designer
            </p>
            <p className="brand-description">
              Crafting beautiful and functional web experiences with modern technologies.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    <span className="link-arrow">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Get In Touch</h3>
            <ul className="contact-list">
              <li>
                <i className="fas fa-envelope"></i>
                <span>shresthasujal949@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+977 9768431211</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h3 className="footer-title">Follow Me</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            <p className="newsletter-text">
              Stay updated with my latest projects
            </p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Sujal Shrestha. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="bottom-link">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#" className="bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="footer-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
      </div>
    </footer>
  );
};

export default Foot;