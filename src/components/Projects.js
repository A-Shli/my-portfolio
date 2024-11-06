import React from 'react';
import './Projects.css';

const projectsData = [
    {
      title: 'Interactive Career Quiz WebApp',
      description: 'A web application that provides career advice based on user input {JavaScript}',
      link: 'https://yourprojectlink.com',
      codeLink: 'https://github.com/yourusername/your-repo',
    },
    {
      title: 'Smart Doorbell System',
      description: 'A smart doorbell system using Raspberry Pi and OpenCV {Flask - Python}',
      link: '#',
      codeLink: 'https://github.com/yourusername/your-repo',
    },
    {
      title: 'Weather Station Program',
      description: 'A functional programming project for querying and updating weather data {Haskell}',
      link: '#',
      codeLink: 'https://github.com/yourusername/your-repo',
    },
    {
      title: 'Wordle WebApp',
      description: 'A game of wordle with a personal touch {JavaScript}',
      link: '#',
      codeLink: 'https://github.com/yourusername/your-repo',
    },
    {
      title: 'Patchwork',
      description: 'Interactive patchwork: mini university assignment {Python}',
      link: '#',
      codeLink: 'https://github.com/yourusername/your-repo',
    },
    {
      title: 'Interactive story App',
      description: 'An interactive story with multiple endings based on user choices {Android Studio - Java}',
      link: '#',
      codeLink: 'https://github.com/yourusername/your-repo'
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
