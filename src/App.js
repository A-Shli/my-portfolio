import React from 'react';
import { BrowserRouter as Router/*, Route, Routes*/ } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home'; 
import 'animate.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        {/* <Home />  Hero section displayed on the homepage */}
        <About />  {/* About section placed directly below the Hero */}
        <Projects />  {/* Projects section */}
        <Contact />  {/* Contact section */}
      </div>
    </Router>
  );
}

export default App;
