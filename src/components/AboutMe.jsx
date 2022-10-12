import React from "react";
import ProPic from "../assets/images/profilepicture.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#000000] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FCE110]">
              About
            </p>
          </div>
          <div className="sm:text-right pb-8 pl-4">
            <img src={ProPic} alt="Logo" style={{ width: "200px" }} />
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Fred Kamm, and i enjoy creating things that live on the
              internet.
            </p>
          </div>
          <div>
            <p>
              I am a web developer leveraging my creative background to build a
              more intuitive user experience on the web. Recently earned a
              certificate in full stack development from The University of
              Pennsylvania Coding Bootcamp, with newly developed skills in
              JavaScript, CSS, React.js, and responsive web design. Known as an
              innovative problem solver passionate about developing apps,
              focusing on mobile-first design and development. With each
              project, my aim is best to engage my audience for an impactful
              user experience. I’m excited to leverage my skills as part of a
              fast-paced, quality-driven team to build better experiences on the
              web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
