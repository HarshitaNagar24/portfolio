import React, { useEffect, useRef, useState } from "react";
import "../styles/Projects.css";
import "../styles/Home.css";

const projects = [
  {
    title: "DietDelights",
    description: "A web app for health-conscious food orders. Frontend: React, Backend: Node.js & Express, Database: MongoDB.",
    link: "#"
  },
  {
    title: "Holiday Hives",
    description: "MERN Stack travel booking platform. Features: Dynamic package creation, day-wise itineraries, real-time pricing, Razorpay payments, Firebase authentication.",
    link: "#"
  }
];

// const Projects = () => (
//   <section className="projects-section" id="projects">
//     <h2>Projects</h2>
//     <div className="projects-list">
//       {projects.map((project, idx) => (
//         <div className="project-card" key={idx}>
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//           {project.link !== "#" && (
//             <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
//           )}
//         </div>
//       ))}
//     </div>
//   </section>
// );
const Projects = () => {
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
      className={`projects-section section-fade${visible ? " visible" : ""}`}
      id="projects"
      ref={ref}
    >
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;