import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import images from "../../assets/images.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      {/* Animated background elements */}
      <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="hero-content">
        <div className="left-section">
          <div className="greeting-badge">
            <span className="badge-icon">👋</span>
            <span>Welcome to my portfolio</span>
          </div>

          <h1 className="hero-title">
            <TypeAnimation
              sequence={[
                "Hi, I'm a Front-End Developer",
                2000,
                "Hi, I'm a React Developer",
                2000,
                "Hi, I create amazing UIs",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>

          <p className="hero-description">
            Crafting <span className="highlight">pixel-perfect</span> and{" "}
            <span className="highlight">responsive</span> web experiences with
            modern technologies. Passionate about creating intuitive interfaces
            that users love.
          </p>

          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">CSS3</span>
            <span className="tech-badge">HTML5</span>
          </div>

          <div className="cta-buttons">
            <a
              href="https://drive.google.com/file/d/130cRtPECzmaitNM1jJ-n577CHB_GqSFl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">
                <span className="btn-icon">📄</span>
                <span>View Resume</span>
              </button>
            </a>
            <Link to="/project">
              <button className="btn btn-secondary">
                <span className="btn-icon">🚀</span>
                <span>View Projects</span>
              </button>
            </Link>
          </div>

          <div className="social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="right-section">
          <div className="image-container">
            <div className="image-frame">
              <img
                src={images}
                alt="Profile"
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="floating-card card-1">
              <div className="card-icon">💻</div>
              <div className="card-text">Clean Code</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">⚡</div>
              <div className="card-text">Fast Performance</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🎨</div>
              <div className="card-text">Modern Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;