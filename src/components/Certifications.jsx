import React from 'react';

const Certifications = () => {
  return (
    <section className="section">
        <div className="section-header">
            <h2 className="section-title gradient-text-alt">Certifications</h2>
            <div className="section-line"></div>
        </div>
        
        <div className="bento-grid">
            <div className="glass-card" style={{padding: '1.5rem'}}>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                    <i className="fab fa-aws" style={{fontSize: '2rem', color: '#ff9900'}}></i>
                    <div>
                        <h3 className="card-title" style={{color: '#fff', marginBottom: '0.25rem'}}>AWS Cloud Practitioner</h3>
                        <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>
                            Foundational knowledge of AWS cloud services, architecture, security best practices, and billing models.
                        </p>
                    </div>
                </div>
            </div>

            <div className="glass-card" style={{padding: '1.5rem'}}>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                    <i className="fas fa-medal" style={{fontSize: '2rem', color: '#06b6d4'}}></i>
                    <div>
                        <h3 className="card-title" style={{color: '#fff', marginBottom: '0.25rem'}}>NCC A Certificate</h3>
                        <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>
                            Developed leadership, discipline, and teamwork through structured military-style training and civic responsibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Certifications;
