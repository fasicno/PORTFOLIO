import React from 'react';

const Experience = () => {
  return (
    <section className="section">
        <div className="section-header">
            <h2 className="section-title gradient-text-alt">Experience</h2>
            <div className="section-line"></div>
        </div>
        
        <div className="timeline">
            <div className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <div className="card-header">
                    <h3 className="card-title">Web Development Intern</h3>
                    <span className="card-date">Nov 2024 – Dec 2024</span>
                </div>
                <div className="card-subtitle">Pinnacle Labs | Remote</div>
                <ul className="project-bullets">
                    <li>Built interactive web applications using React.js, HTML5, CSS3, and JavaScript with a focus on responsive design and clean UI/UX.</li>
                    <li>Integrated RESTful APIs to fetch and display real-time data, and implemented caching strategies to improve API call efficiency.</li>
                </ul>
            </div>
        </div>
    </section>
  );
};

export default Experience;
