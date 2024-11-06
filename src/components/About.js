import React from 'react';
import './About.css'; // Import the associated CSS

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
      A transitioning Junior Software Engineer with a computer science degree and hands-on coding projects. Currently applying my skills in software engineering through personal projects, with a strong commitment to a career shift.      </p>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript (React.js, Node.js)</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>Database Management (MySQL, MongoDB)</li>
          <li>Agile Development</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
