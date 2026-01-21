import React, { useState } from "react";
import "./project.css";
import Nav from "../nav/Nav";
import comming from "../../assets/comming.jpg";
import Screenshot1 from "../../assets/Screenshot1.png";
import Screenshot2 from "../../assets/Screenshot2.png";
import Screenshot3 from "../../assets/Screenshot3.png";
import Screenshot4 from "../../assets/Screenshot4.png";
import Screenshot5 from '../../assets/Screenshot5.png'
import Foot from "../footer/foot";

const Project = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "NGO Website",
      category: "web",
      image: Screenshot1,
      description: "A fully responsive NGO webpage designed and developed to test and refine my skills in CSS, HTML, and JavaScript. Successfully deployed online using GitHub.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "web",
      image: Screenshot2,
      description: "Modern e-commerce solution with dynamic shopping cart, product filtering, and seamless checkout experience built with React.",
      technologies: ["React", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Travel & Tours",
      category: "web",
      image: Screenshot3,
      description: "Dynamic travel booking platform featuring interactive maps, destination galleries, and real-time availability checking.",
      technologies: ["React", "API", "CSS"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "design",
      image: Screenshot4,
      description: "Clean and modern portfolio showcasing creative work with smooth animations and an intuitive user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Coming Soon",
      category: "upcoming",
      image: Screenshot4,
      description: "AI powered web application currently in development. Stay tuned for innovative features and cutting-edge functionalities for recruiters and job seekers.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Coming Soon",
      category: "upcoming",
      image: comming,
      description: "Another amazing project currently in the works. Will be launching soon with cutting-edge features.",
      technologies: ["React", "TypeScript", "API"],
      link: "#",
      github: "#"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: "🎯" },
    { id: "web", label: "Web Apps", icon: "🌐" },
    { id: "design", label: "Design", icon: "🎨" },
    { id: "upcoming", label: "Upcoming", icon: "🚀" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <Nav />
      <div className="projects-wrapper">
        <div className="projects-hero">
          <div className="hero-decoration">
            <div className="deco-circle deco-1"></div>
            <div className="deco-circle deco-2"></div>
          </div>
          
          <div className="projects-container">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span>My Work</span>
            </div>
            
            <h1 className="projects-title">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            
            <p className="projects-subtitle">
              A collection of my recent work and creative endeavors
            </p>

            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${filter === cat.id ? "active" : ""}`}
                  onClick={() => setFilter(cat.id)}
                >
                  <span className="filter-icon">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-grid-section">
          <div className="projects-container">
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="overlay-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        
                        <div className="project-tech">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>

                        <div className="project-actions">
                          <a href={project.link} className="action-btn primary-btn">
                            <span className="btn-icon">👁️</span>
                            <span>Live Demo</span>
                          </a>
                          <a href={project.github} className="action-btn secondary-btn">
                            <span className="btn-icon">💻</span>
                            <span>Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-card">
            <h2 className="cta-title">Let's Work Together</h2>
            <p className="cta-text">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
            <a href="/contact">
              <button className="cta-button">
                <span className="btn-icon">💬</span>
                <span>Get In Touch</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Project;