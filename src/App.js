import React from 'react';
import { BrowserRouter as Router/*, Route, Routes*/ } from 'react-router-dom';
import Header from './components/Header';
// import Home from './components/Home'; // Assuming Home is the landing section containing Hero
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero'; 
import 'animate.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />  {/* Hero section displayed on the homepage */}
        <About />  {/* About section placed directly below the Hero */}
        <Projects />  {/* Projects section */}
        <Contact />  {/* Contact section */}
      </div>
    </Router>
  );
}

export default App;
