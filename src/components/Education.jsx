import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: "St Joseph Engineering College",
      location: "Mangaluru, Karnataka, India",
      date: "Dec 2022 – May 2026",
      degree: "Bachelor of Engineering in Computer Science Engineering",
      score: "CGPA: 8.69/10.0"
    },
    {
      institution: "Bhuvanendra PU College",
      location: "Karkala, Karnataka, India",
      date: "May 2020 – Jun 2022",
      degree: "Pre-University Course",
      score: "Percentage: 94.5%"
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
          <h2 className="section-title gradient-text-alt">Education</h2>
          <div className="section-line"></div>
      </div>
      
      <div className="timeline">
        {educationData.map((edu, index) => (
            <div className="timeline-item glass-card" key={index}>
                <div className="timeline-dot" style={{borderColor: '#ec4899', boxShadow: '0 0 10px #ec4899'}}></div>
                <div className="card-header">
                    <h3 className="card-title" style={{color: '#fff'}}>{edu.institution}</h3>
                    <span className="card-date" style={{color: 'var(--accent-pink)'}}>{edu.date}</span>
                </div>
                <div className="card-subtitle">{edu.location}</div>
                <p style={{color: 'var(--text-muted)'}}>{edu.degree}</p>
                <div className="skill-pill" style={{display: 'inline-block', marginTop: '1rem', background: 'rgba(236,72,153,0.1)', borderColor: 'rgba(236,72,153,0.3)', color: '#fff'}}>
                    {edu.score}
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
