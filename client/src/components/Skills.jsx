import React, { useState, useEffect } from 'react';
import { skills as skillsData } from '../data/skills';
import './Skills.css';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setSkills(skillsData);
      setLoading(false);
    }, 500);
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
        ) : (
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index} style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="skill-category">{skill.category}</h3>
                <div className="skill-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <span className="progress-text">{skill.proficiency}%</span>
                  </div>
                </div>
                <div className="skill-items">
                  {skill.items.map((item, itemIndex) => (
                    <span className="skill-item" key={itemIndex}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
