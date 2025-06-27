import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Harshita Nagar</div>
    <ul className="navbar-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
    </ul>
  </nav>
);

export default Navbar;