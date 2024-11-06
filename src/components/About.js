import React from 'react';
import './About.css'; // Import the associated CSS

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
      A transitioning Junior Software Engineer with a computer science degree and hands-on coding projects. Currently applying my skills in software engineering through personal projects, with a strong commitment to a career shift.      </p>
      <br/>
      <br/>
      <div className="skills">
        <h3>Skills</h3>
        <h4>Languages</h4>
        <ul>
          <li>JavaScript (React.js, Node.js)</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>Database Management (MySQL, MongoDB)</li>
          <li>Agile Development</li>
        </ul>
        <h4>Frameworks</h4>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Flask</li>
        </ul>
        <h4>Other</h4>
        <ul>
          <li>Database Management: MySQL, PostgreSQL, MongoDB</li>
          <li>Agile Development</li>
          <li>...</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
