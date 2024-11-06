import React from 'react';
import './Projects.css';

const projectsData = [
    {
      title: 'Quiz-based Career Advice Web App',
      description: 'A web application that provides career advice based on user input.',
      link: 'https://yourprojectlink.com',
      codeLink: 'https://github.com/yourusername/your-repo',
    },
    {
      title: 'Smart Doorbell Development',
      description: 'A smart doorbell system using Raspberry Pi and OpenCV.',
      link: '#',
      codeLink: 'https://github.com/yourusername/your-repo',
    },
    {
      title: 'Weather Station Program',
      description: 'A functional programming project for querying and updating weather data.',
      link: '#',
      codeLink: 'https://github.com/yourusername/your-repo',
    }
  ];
  

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.link} className="button" target="_blank" rel="noopener noreferrer">View Project</a>
              <a href={project.codeLink} className="button" target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
