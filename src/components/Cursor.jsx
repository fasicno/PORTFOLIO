import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleHover = () => {
      if (cursorRef.current) cursorRef.current.classList.add('hovering');
    };

    const handleLeave = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('hovering');
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    setTimeout(() => {
      document.querySelectorAll('a, button, .glass-card, .hover-lift').forEach(el => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleLeave);
      });
    }, 1000); // small delay to ensure DOM is rendered

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="magic-cursor"
    />
  );
};

export default Cursor;
