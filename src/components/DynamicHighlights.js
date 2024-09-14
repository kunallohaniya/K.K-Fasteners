import React from 'react';
import Lottie from 'lottie-react';
import QAAnimation from '../assets/QA.json';
import OTDAnimation from '../assets/OTD.json';
import CSAnimation from '../assets/CS.json';

export const DynamicHighlights = () => {
  return (
    <div className='relative bg-green-50 overflow-hidden py-16'>
      <div className='absolute inset-0'>
        <div className='parallax-bg h-full w-full' style={{ backgroundImage: `url('/path-to-background-image.jpg')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>
      <div className='relative z-10 container mx-auto px-6 flex flex-col items-center space-y-8'>
        <h2 className='text-3xl text-center text-orange-700 font-bold'>Dynamic Highlights</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          <div className='flex flex-col items-center text-center'>
            <Lottie animationData={QAAnimation} style={{ width: 200, height: 200 }} />
            <h3 className='text-xl font-semibold text-orange-700 mt-4'>Quality Assurance</h3>
            <p className='text-gray-600'>Ensuring the highest standards in everything we do.</p>
          </div>
          
          <div className='flex flex-col items-center text-center'>
            <Lottie animationData={OTDAnimation} style={{ width: 200, height: 200 }} />
            <h3 className='text-xl font-semibold text-orange-700 mt-4'>On-Time Delivery</h3>
            <p className='text-gray-600'>We value your time and strive for prompt delivery.</p>
          </div>
          
          <div className='flex flex-col items-center text-center'>
            <Lottie animationData={CSAnimation} style={{ width: 200, height: 200 }} />
            <h3 className='text-xl font-semibold text-orange-700 mt-4'>Customer Support</h3>
            <p className='text-gray-600'>Dedicated to assisting you every step of the way.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DynamicHighlights;
