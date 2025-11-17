import React from "react";
import '../AboutUS/aboutus.css';
import Nav from "../nav/Nav";
import js from "../../assets/js.png";
import css from "../../assets/css.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import { Link } from "react-router-dom";
import Foot from "../footer/foot";

const Aboutus = () => {
  const skills = [
    { name: "HTML5", icon: html, level: 90, color: "#E34F26" },
    { name: "CSS3", icon: css, level: 85, color: "#1572B6" },
    { name: "JavaScript", icon: js, level: 80, color: "#F7DF1E" },
    { name: "React", icon: react, level: 75, color: "#61DAFB" },
    { name: "Python", icon: python, level: 70, color: "#3776AB" },
    { name: "Java", icon: java, level: 65, color: "#007396" }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "3+", label: "Years Experience", icon: "⏱️" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "💬" }
  ];

  return (
    <>
      <Nav />
      <div className="about-wrapper">
        <div className="about-hero">
          <div className="hero-decoration">
            <div className="deco-circle circle-1"></div>
            <div className="deco-circle circle-2"></div>
          </div>
          
          <div className="about-container">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span>Get To Know Me</span>
            </div>
            
            <h1 className="about-title">
              About <span className="gradient-text">Me</span>
            </h1>
            
            <p className="about-subtitle">
              Passionate Developer & Creative Designer
            </p>
          </div>
        </div>

        <div className="about-content-section">
          <div className="about-container">
            <div className="story-grid">
              <div className="story-card">
                <div className="card-icon">👨‍💻</div>
                <h3>Who I Am</h3>
                <p>
                  Hello! I'm Sujal Shrestha, a passionate web developer and graphic
                  designer dedicated to crafting visually stunning and highly
                  functional digital experiences. With a strong foundation in both
                  creative design and technical development, I bring a unique
                  perspective to every project I undertake.
                </p>
              </div>

              <div className="story-card">
                <div className="card-icon">🎯</div>
                <h3>My Journey</h3>
                <p>
                  My journey in web development began with personal projects, where
                  I honed my skills in HTML, CSS, JavaScript, and React. Over time,
                  I've expanded my expertise to include responsive design, dynamic
                  user interfaces, and performance optimization. When I'm not
                  coding, I immerse myself in graphic design, blending artistic
                  creativity with user-centered design principles.
                </p>
              </div>

              <div className="story-card">
                <div className="card-icon">💡</div>
                <h3>What I Offer</h3>
                <p>
                  Whether you need a modern e-commerce platform, a visually engaging
                  NGO website, or a dynamic travel and tours application, I'm here
                  to bring your ideas to life. Let's work together to create
                  something amazing!
                </p>
              </div>
            </div>

            <div className="cta-section">
              <a
                href="https://drive.google.com/file/d/1EteQ1trIdD4UkGY7CDbGFr5FzYMNJFLy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-gradient">
                  <span className="btn-icon">📄</span>
                  <span>View Resume</span>
                </button>
              </a>
              <Link to="/project">
                <button className="btn-outline">
                  <span className="btn-icon">💼</span>
                  <span>View Projects</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="about-container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-section">
          <div className="about-container">
            <div className="section-header">
              <h2 className="section-title">
                Technical <span className="gradient-text">Skills</span>
              </h2>
              <p className="section-description">
                Technologies I work with to bring your ideas to life
              </p>
            </div>
<div className="boxes ">
              <div className="box1  animate__animated animate__backInLeft ">
                <img src={html} alt="" />
              </div>
              <div className="box1 animate__animated animate__backInLeft">
                <img src={css} alt="" />
              </div>
              <div className="box1 animate__animated animate__backInLeft">
                <img src={js} alt="" />
              </div>
              <div className="box1 animate__animated animate__backInLeft">
                <img src={react} alt="" />
              </div>
              <div className="box1 animate__animated animate__backInLeft">
                <img src={python} alt="" />
              </div>
              <div className="box1 ">
                <img src={java} alt="" />
              </div>
            </div>

           
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Aboutus;