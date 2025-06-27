import React, { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";
import "../styles/Home.css";

const Hero = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`hero-section section-fade${visible ? " visible" : ""}`}
      id="hero"
      ref={ref}
    >
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Harshita Nagar</span></h1>
        <p>
          Innovative React Developer with a comprehensive background in building and maintaining responsive websites. Proficient in modern JavaScript libraries, CSS, HTML5, and progressive web applications. My work has resulted in improved user experiences and increased website performance.
        </p>
        <a href="#projects" className="hero-btn">View My Work</a>
        <a href="/Resume.pdf" className="hero-btn" style={{marginLeft: 12}} target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
      <div className="hero-img">
        {/* Replace with your photo if available */}
        <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Harshita Nagar" />
      </div>
    </section>
  );
};

export default Hero;