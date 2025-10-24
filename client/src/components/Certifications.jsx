import React, { useState, useEffect } from 'react';
import { certifications as certificationsData } from '../data/certifications';
import './Certifications.css';

function Certifications() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setCertifications(certificationsData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Professional certifications and credentials</p>
        
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading certifications...</p>
          </div>
        ) : (
          <div className="certifications-container">
            {certifications.map((cert, index) => (
              <div 
                className="certification-card" 
                key={cert.id} 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="certification-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="certification-overlay">
                    <a 
                      href={cert.verifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="verify-link"
                    >
                      <i className="fas fa-check-circle"></i> Verify Certificate
                    </a>
                  </div>
                </div>
                <div className="certification-info">
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-issuer">
                    <i className="fas fa-building"></i> {cert.issuer}
                  </p>
                  <div className="certification-meta">
                    <span className="certification-date">
                      <i className="far fa-calendar"></i> {cert.date}
                    </span>
                    <span className="certification-id">
                      <i className="fas fa-id-card"></i> {cert.credentialId}
                    </span>
                  </div>
                  <div className="certification-skills">
                    {cert.skills.map((skill, skillIndex) => (
                      <span className="skill-badge" key={skillIndex}>{skill}</span>
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
}

export default Certifications;
