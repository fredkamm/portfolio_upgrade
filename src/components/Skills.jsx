import React from "react";

import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JavaScript from "../assets/images/javascript.png";
import Github from "../assets/images/github.png";
import Reactlogo from "../assets/images/react.png";
import Node from "../assets/images/node.png";
import SQL from "../assets/images/mysql.png";
import Tailwind from "../assets/images/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="github icon" />
            <p className="my-4">Github</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Reactlogo} alt="react icon" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="node icon" />
            <p className="my-4">Node</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SQL} alt="node icon" />
            <p className="my-5">MySQL</p>
          </div>
          
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
