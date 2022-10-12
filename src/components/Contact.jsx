import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#000000] flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/7676c069-e04f-4b7d-957f-93f542a8679b'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FCE110] text-[#ccd6f6]'>
            Contact
          </p>
          <p className='text-[#ccd6f6] py-4'>
            Submit the form below or shoot me an email - fred.kamm95@gmil.com
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Chat
        </button>
      </form>
    </div>
  );
};

export default Contact;
