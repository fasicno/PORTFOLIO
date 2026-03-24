import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      tags: ["Java", "Python", "C/C++", "JavaScript", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "Frameworks",
      tags: ["React.js", "Flask", "Node.js", "Express.js"]
    },
    {
      category: "Databases",
      tags: ["MySQL", "MongoDB", "PostgreSQL", "Firebase Firestore"]
    },
    {
      category: "AI & Tools",
      tags: ["Google Genkit AI", "Gemini API", "TensorFlow", "NumPy", "OpenCV", "AWS", "Git"]
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
          <h2 className="section-title gradient-text-alt">Skills</h2>
          <div className="section-line"></div>
      </div>
      
      <div className="glass-card">
        {skillsData.map((skillGroup, index) => (
          <div className="skill-category" key={index} style={{marginBottom: index === skillsData.length - 1 ? 0 : '2rem'}}>
              <h3 className="card-subtitle" style={{color: '#fff', fontSize: '1rem', marginBottom: '0.75rem'}}>{skillGroup.category}</h3>
              <div className="skill-list">
                {skillGroup.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="skill-pill">
                    {tag}
                  </span>
                ))}
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
