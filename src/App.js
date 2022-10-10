import React from "react";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/AboutMe";
import Work from "./components/pages/Work";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Work />
            <Skills />
            <Contact />
        </div>
    );
};

export default App;
