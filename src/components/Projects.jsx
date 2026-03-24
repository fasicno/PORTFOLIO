import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: "BookEase – AI Travel Assistant",
      date: "2025",
      stack: ["Google Genkit AI", "Gemini API", "Firebase", "React.js"],
      bullets: [
        "Built a travel recommendation system using Google Genkit AI and Gemini models that processes user preferences.",
        "Designed a clean user interface with search filters and a booking management system.",
        "Developed a custom REST API for dynamic image fetching and content delivery."
      ]
    },
    {
      title: "Medical Image Reconstruction",
      date: "2025",
      stack: ["Flask", "Python", "React.js", "OpenCV", "VTK"],
      bullets: [
        "Developed a full-stack imaging app processing DICOM images to reconstruct 3D models.",
        "Built interactive 3D visualisation interface for real-time model analysis.",
        "Used NumPy and PyDICOM to handle efficient reconstruction across image sets."
      ]
    },
    {
      title: "Real-Time Weather Forecast App",
      date: "2024",
      stack: ["React.js", "HTML5", "CSS3", "REST API", "JS"],
      bullets: [
        "Integrated OpenWeatherMap API to deliver real-time data and 5-day forecasts.",
        "Added geolocation services and location search with autocomplete.",
        "Designed responsive UI displaying conditional meteorological data."
      ]
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
          <h2 className="section-title gradient-text-alt">Projects</h2>
          <div className="section-line"></div>
      </div>
      
      <div className="bento-grid">
        {projectsData.map((project, index) => (
          <div className="glass-card project-card" key={index}>
              <div className="card-header" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-date">{project.date}</span>
              </div>
              <ul className="project-bullets">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <div className="project-stack">
                {project.stack.map((tech, idx) => (
                    <span className="stack-tag" key={idx}>{tech}</span>
                ))}
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
