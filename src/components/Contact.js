import React from 'react';
import './Contact.css'; // Add custom CSS for Contact section
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Solid icon for email
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';  // Brand icons for LinkedIn and GitHub

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:ala.shlibak07@gmail.com">ala.shlibak07@gmail.com</a></p>
      <p><FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/ala-shlibak" target="_blank">Connect with me on LinkedIn</a></p>
      <p><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/A-Shli" target="_blank">Check out my GitHub</a></p>
    </section>
  );
};

export default Contact;
