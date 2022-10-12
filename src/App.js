import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/AboutMe";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Work /> */}
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
