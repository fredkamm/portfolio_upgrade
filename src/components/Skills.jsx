import React from 'react';

import HTML from '../assets/images/html.png';
import CSS from '../assets/images/css.png';
import JavaScript from '../assets/images/javascript.png';
// import Github from '../assets/images/github.png';
import Reactlogo from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import Mongo from '../assets/images/mongo.png';
// import Tailwind from '../assets/images/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#000000] text-[#ccd6f6]'>
      <div className='max-w-[750px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#FCE110]'>
            Skills
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#FCE110] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#FCE110] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#FCE110] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='JS icon' />
            <p className='my-4'>JavaScript</p>
          </div>

          <div className='shadow-md shadow-[#FCE110] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Reactlogo} alt='react icon' />
            <p className='my-4'>React</p>
          </div>

          <div className='shadow-md shadow-[#FCE110] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='node icon' />
            <p className='my-4'>Node</p>
          </div>

          <div className='shadow-md shadow-[#FCE110] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt='node icon' />
            <p className='my-5'>MongoDB</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
