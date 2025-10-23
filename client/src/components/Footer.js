import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">Vedant Khairnar</div>
            <p className="footer-tagline">
              Full-stack developer passionate about creating innovative solutions with modern technologies.
            </p>
          </div>
          <p className="footer-copyright">
            &copy; {currentYear} Vedant Khairnar. Made with ❤️ and lots of coffee.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/vedant-khairnar" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Vedantkhairnar729" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:vedantkhairnar041@gmail.com" className="social-icon" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;