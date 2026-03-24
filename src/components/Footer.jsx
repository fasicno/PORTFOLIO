import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section" id="contact">
      <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2 className="section-title gradient-text-alt" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Get In Touch</h2>
        <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="contact-info" style={{ justifyContent: 'center' }}>
          <a href="mailto:poojarydhanush284@gmail.com" className="contact-link" style={{ border: '1px solid var(--accent-cyan)', padding: '0.75rem 1.5rem', borderRadius: '50px' }}>
            <i className="fas fa-envelope"></i> Say Hello
          </a>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            <a href="https://github.com/fasicno" target="_blank" rel="noreferrer" className="contact-link"><i className="fab fa-github" style={{ fontSize: '1.5rem' }}></i></a>
            <a href="tel:+919606890316" className="contact-link"><i className="fas fa-phone" style={{ fontSize: '1.5rem' }}></i></a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
            Designed & Built by Dhanush Sunil Poojary
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
