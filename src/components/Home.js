import React from 'react';
import './Home.css'; // New custom CSS for the Home component

const Home = () => {
  return (
    <section id="home">
      <div className="hero-content">
        <h1>Welcome to My Portfolio!</h1>
        <p>I’m an aspiring software engineer with a love for creativity and code.</p>
        <button className="cta-button">See My Work</button>
      </div>
    </section>
  );
};

export default Home;
