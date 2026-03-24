import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4 words * 600ms = 2400ms + 500ms hold
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Loader isLoading={loading} />
      
      {/* Background Ambience */}
      <div className="bg-noise"></div>
      <div className="bg-grid"></div>
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      
      {/* Custom Mouse Cursor */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="container" id="home">
        <Header />
        
        <main className="main-content">
          <div className="left-column">
            <div id="skills"><Skills /></div>
            <div id="education"><Education /></div>
            <Certifications />
          </div>
          
          <div className="right-column">
            <div id="experience"><Experience /></div>
            <div id="projects"><Projects /></div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
