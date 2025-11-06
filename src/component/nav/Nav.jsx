import React, { useState, useEffect } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-brand">
          {/* <span className="brand-text">Sujal</span> */}
          <span className="brand-dot">Sujal Shrestha</span>
        </div>

        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <NavLink 
              className="nav-link" 
              to="/" 
              onClick={toggleMenu}
            >
              <span className="link-icon">🏠</span>
              <span className="link-text">Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className="nav-link" 
              to="/about" 
              onClick={toggleMenu}
            >
              <span className="link-icon">👤</span>
              <span className="link-text">About</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className="nav-link" 
              to="/project" 
              onClick={toggleMenu}
            >
              <span className="link-icon">💼</span>
              <span className="link-text">Projects</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className="nav-link contact-link" 
              to="/contact" 
              onClick={toggleMenu}
            >
              <span className="link-icon">✉️</span>
              <span className="link-text">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;