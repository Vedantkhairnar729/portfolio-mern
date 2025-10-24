import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import './Hero.css';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        'Full-Stack Developer',
        'MERN Stack Expert',
        'Software Engineer',
        'React.js Specialist',
        'Problem Solver',
        'Tech Enthusiast'
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <ParticlesBackground />
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name gradient-text">Vedant Khairnar</span>
          </h1>
          <h2 className="hero-subtitle">
            I'm a <span className="typed-text" ref={typedElement}></span>
          </h2>
          <p className="hero-description">
            Passionate Full-Stack Developer specializing in MERN stack development with a focus on 
            user experience and scalable architecture. Creating efficient, scalable solutions that make a real impact.
          </p>
          <div className="hero-buttons">
            <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
              <span>View My Work</span>
              <i className="arrow-icon">→</i>
            </Link>
            <Link to="contact" smooth={true} duration={500} className="btn btn-outline">
              <span>Get In Touch</span>
            </Link>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/Vedantkhairnar729" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vedant-khairnar" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:vedantkhairnar041@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src="https://avatars.githubusercontent.com/u/146806970?v=4" 
                alt="Vedant Khairnar" 
                className="hero-profile-image"
              />
              <div className="image-glow"></div>
            </div>
            <div className="floating-badges">
              <div className="badge badge-1">
                <i className="fab fa-react"></i>
              </div>
              <div className="badge badge-2">
                <i className="fab fa-node-js"></i>
              </div>
              <div className="badge badge-3">
                <i className="fab fa-js"></i>
              </div>
              <div className="badge badge-4">
                <i className="fab fa-java"></i>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <Link to="about" smooth={true} duration={500}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </Link>
      </div>
    </section>
  );
};

export default Hero;