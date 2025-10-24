import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeCertifications: 0,
    cloudPlatforms: 0,
    githubRepos: 0
  });

  useEffect(() => {
    // Animate numbers on load
    const animateValue = (start, end, duration, key) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setStats(prev => ({
          ...prev,
          [key]: Math.floor(progress * (end - start) + start)
        }));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    setTimeout(() => {
      animateValue(0, 20, 2000, 'totalProjects');
      animateValue(0, 20, 2000, 'activeCertifications');
      animateValue(0, 3, 1500, 'cloudPlatforms');
      animateValue(0, 50, 2500, 'githubRepos');
    }, 200);
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="about-content">
          {/* Stats Cards */}
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">{stats.totalProjects}+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">{stats.activeCertifications}+</h3>
                <p className="stat-label">Certifications</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">{stats.cloudPlatforms}</h3>
                <p className="stat-label">Cloud Platforms</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">{stats.githubRepos}+</h3>
                <p className="stat-label">GitHub Repos</p>
              </div>
            </div>
          </div>

          {/* About Info */}
          <div className="about-info">
            <div className="about-text-card">
              <h3 className="about-title">
                <span className="title-icon">👨‍💻</span>
                Who am I?
              </h3>
              <p>
                I'm a passionate <strong>Full-Stack Developer</strong> with expertise in modern web technologies and 
                MERN stack development. I love creating efficient, scalable solutions that make a real impact.
                With a strong foundation in both frontend and backend technologies, I specialize in building 
                full-stack web applications with a focus on user experience and performance.
              </p>
              <p>
                My expertise includes both frontend and backend development, database design, and cloud deployment. 
                I have worked on various projects ranging from inventory management systems to blockchain voting platforms, 
                always focusing on creating innovative solutions with modern technologies.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fas fa-code"></i>
                  <span>Clean Code Enthusiast</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-rocket"></i>
                  <span>Performance Focused</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-lightbulb"></i>
                  <span>Problem Solver</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-users"></i>
                  <span>Team Player</span>
                </div>
              </div>
            </div>

            <div className="about-details-grid">
              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-user"></i>
                </div>
                <div className="detail-content">
                  <span className="label">Name</span>
                  <span className="value">Vedant Khairnar</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="detail-content">
                  <span className="label">Email</span>
                  <span className="value">vedantkhairnar041@gmail.com</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="detail-content">
                  <span className="label">Location</span>
                  <span className="value">Nashik, Maharashtra, IN</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="detail-content">
                  <span className="label">Education</span>
                  <span className="value">B.Tech in Computer Science</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="detail-content">
                  <span className="label">Availability</span>
                  <span className="value">Open to opportunities</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="detail-content">
                  <span className="label">Phone</span>
                  <span className="value">+91 9226915201</span>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a href="https://github.com/Vedantkhairnar729" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fab fa-github"></i> View GitHub Profile
              </a>
              <a href="mailto:vedantkhairnar041@gmail.com" className="btn btn-outline">
                <i className="fas fa-envelope"></i> Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;