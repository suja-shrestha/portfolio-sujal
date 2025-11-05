import React, { useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="head">
      <div className="nav">
        <h1>Sujal Shrestha</h1>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
        <ul className={menuOpen ? "active" : ""}>
          <li>
            <NavLink className="link" to="/" activeClassName="active" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about" activeClassName="active" onClick={toggleMenu}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/project" activeClassName="active" onClick={toggleMenu}>
              Project
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact" activeClassName="active" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
