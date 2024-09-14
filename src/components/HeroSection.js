import React from 'react';

const HeroSection = () => {
  return (
    <div className='relative h-screen flex justify-center items-center overflow-hidden'>
      <video 
        className='absolute top-0 left-0 w-full h-full object-cover' 
        src='path-to-your-video.mp4' 
        autoPlay 
        loop 
        muted 
        style={{ transform: 'translateZ(-1px) scale(2)' }} // Parallax effect
      />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <div className='relative z-10 text-center'>
        <h1 className='text-5xl text-orange-700 font-bold mb-4'>Welcome to K.K. Fasteners</h1>
        <p className='text-lg text-green-900'>Leading Manufacturer of Cold And Hot Forging Products</p>
        <br></br>
        <div className='flex justify-center space-x-4'>
          <button className='px-6 py-3 bg-orange-700 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300 ease-in-out'>
            Contact Us
          </button>
          <button className='px-6 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300 ease-in-out'>
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
