import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/api/skills');
        setSkills(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError('Failed to load skills');
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const iconMap = {
    'code': '💻',
    'server': '🖥️',
    'palette': '🎨',
    'cloud': '☁️'
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
        
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading skills...</p>
          </div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.id} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="skill-icon">{iconMap[skill.icon] || '⚡'}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${skill.proficiency}%` }}
                  >
                    <span className="progress-text">{skill.proficiency}%</span>
                  </div>
                </div>
                <div className="skill-technologies">
                  {skill.technologies.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
