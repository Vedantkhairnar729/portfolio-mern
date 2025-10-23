import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

import React, { useState, useEffect } from 'react';
import { projects as projectsData } from '../data/projects';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Check out some of my recent work</p>
        
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        ) : (
          <div className="projects-container">
            {projects.map((project, index) => (
              <div className="project-card" key={project.id} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i> GitHub
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span className="tech-tag" key={techIndex}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
