import React from 'react';
import './Contact.css'; // Add custom CSS for Contact section
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Solid icon for email
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';  // Brand icons for LinkedIn and GitHub

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p><FontAwesomeIcon icon={faEnvelope} /> ala.shlibak07@gmail.com</p>
      <p><FontAwesomeIcon icon={faLinkedin} /> Add-Linkedin</p>
      <p><FontAwesomeIcon icon={faGithub} /> Add-github</p>
    </section>
  );
};

export default Contact;
