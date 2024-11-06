import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">Hi, I'm Ala</h1>
        <p className="home-subtitle">A curious developer on a journey to transform ideas into digital experiences, <br />ready to embrace challenges and grow with each line of code.</p>
      </div>
      <div className="scroll-prompt">
        <p>Scroll down</p>
        <FontAwesomeIcon icon={faArrowDown} className="scroll-icon" />
      </div>
    </section>
  );
};

export default Home;