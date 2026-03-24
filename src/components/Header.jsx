import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="availability-pill">
        <div className="pulsing-dot"></div>
        Available for work
      </div>
      <h1 className="name">
        <span className="gradient-text">Dhanush Sunil</span> Poojary
      </h1>
      <p className="hero-subtitle">
        Building interactive web applications & full-stack software with a focus on responsive design, clean UI/UX, and scalable API architecture.
      </p>
      <div className="contact-info">
        <a href="tel:+919606890316" className="contact-link">
          <i className="fas fa-phone"></i> +91 9606890316
        </a>
        <a href="mailto:poojarydhanush284@gmail.com" className="contact-link">
          <i className="fas fa-envelope"></i> poojarydhanush284@gmail.com
        </a>
        <a href="https://github.com/fasicno" target="_blank" rel="noreferrer" className="contact-link">
          <i className="fab fa-github"></i> github.com/fasicno
        </a>
        <span className="contact-link">
          <i className="fas fa-map-marker-alt"></i> Karkala, Karnataka, India
        </span>
      </div>
    </header>
  );
};

export default Header;
