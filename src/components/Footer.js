import React from 'react';
import fb from "../assets/fb.png";
import x from "../assets/x.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className='bg-orange-700 text-white p-8 mt-auto overflow-hidden'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <p>&copy; 2017 K.K. Fasteners. All Rights Reserved.</p>
        <div className='flex space-x-4'>
          <a href='#' className='text-white hover:underline'>Privacy Policy</a>
          <a href='#' className='text-white hover:underline'>Terms of Service</a>
        </div>
      </div>

      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-6'>
        {/* Social Media Links */}
        <div className='flex space-x-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src={fb} alt='Facebook' className='w-6 h-6' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src={x} alt='Twitter' className='w-6 h-6' />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} alt='LinkedIn' className='w-6 h-6' />
          </a>
        </div>

        {/* Newsletter Signup */}
        <form className='flex mt-4 md:mt-0'>
          <input 
            type='email' 
            placeholder='Enter your email' 
            className='p-2 rounded-l border-none focus:ring-2 focus:ring-orange-600'
          />
          <button 
            type='submit' 
            className='px-4 py-2 bg-green-700 text-white rounded-r hover:bg-green-600 transition duration-300'
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

