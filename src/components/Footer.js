import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    &copy; {new Date().getFullYear()} Harshita Nagar. All rights reserved.
  </footer>
);

export default Footer;