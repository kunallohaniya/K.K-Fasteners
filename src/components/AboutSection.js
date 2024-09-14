import React from 'react';
import forgingImage from '../assets/forgingImage.png';

export const AboutSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center p-8 bg-yellow overflow-hidden'>
      <img src={forgingImage} alt='Forging Process' className='w-1/6 h-300px rounded shadow-lg mb-4 md:mb-0' />
      <div className='md:w-1/2 text-center md:text-left'>
        <h2 className='text-3xl text-orange-700 font-semibold mb-2'>About Us</h2>
        <p className='text-lg text-gray-600'>
          K.K. Fasteners is a leader in manufacturing high-quality cold and hot forging products.
          We have been serving various industries with our cutting-edge forging technology.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
