import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="hero" className="logo" smooth={true} duration={500}>
          <span className="logo-name">VK</span>
          <span className="logo-text">Vedant Khairnar</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${menuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="achievements" smooth={true} duration={500} onClick={toggleMenu}>
              Achievements
            </Link>
          </li>
          <li>
            <Link to="certifications" smooth={true} duration={500} onClick={toggleMenu}>
              Certifications
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;