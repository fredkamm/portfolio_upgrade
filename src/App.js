import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/AboutMe';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
