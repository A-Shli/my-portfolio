import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Ala</h1>
        <p className="hero-subtitle">A passionate developer who loves creating web experiences.</p>
      </div>
      <div className="scroll-prompt">
        <p>Scroll down</p>
        <FontAwesomeIcon icon={faArrowDown} className="scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;
