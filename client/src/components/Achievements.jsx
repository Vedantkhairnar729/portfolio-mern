import React, { useState, useEffect } from 'react';
import { achievements as achievementsData } from '../data/achievements';
import './Achievements.css';

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setAchievements(achievementsData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Recognition and accomplishments along my journey</p>
        
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading achievements...</p>
          </div>
        ) : (
          <div className="achievements-container">
            {achievements.map((achievement, index) => (
              <div 
                className="achievement-card" 
                key={achievement.id} 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="achievement-icon">
                  <i className={achievement.icon}></i>
                </div>
                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  <div className="achievement-footer">
                    <span className="achievement-date">
                      <i className="far fa-calendar"></i> {achievement.date}
                    </span>
                    <span className="achievement-org">
                      <i className="far fa-building"></i> {achievement.organization}
                    </span>
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

export default Achievements;
