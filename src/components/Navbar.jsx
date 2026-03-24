import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar flex-between ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <a href="#home">Dhanush<span style={{ color: 'var(--accent-cyan)' }}>.</span></a>
      </div>
      <div className="nav-links">
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;
