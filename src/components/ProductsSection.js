import React from 'react';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';

const ProductsSection = () => {
  return (
    <div className='flex flex-col p-8 bg-green-50 overflow-hidden'>
      <h2 className='text-3xl text-center text-orange-700 font-semibold mb-6'>Our Products</h2>
      <div className='carousel flex overflow-x-auto space-x-8'>
        <div className='flex flex-col items-center min-w-max transform transition-transform duration-300 hover:scale-110 hover:filter hover:sepia hover:brightness-135'>
          <img src={product1} alt='Product 1' className='w-60 h-72 object-cover rounded shadow-lg' />
          <h3 className='text-xl text-orange-700 mt-4'>Product 1</h3>
          <p className='text-gray-600'>Description of Product 1.</p>
        </div>
        <div className='flex flex-col items-center min-w-max transform transition-transform duration-300 hover:scale-110 hover:filter hover:sepia hover:brightness-135'>
          <img src={product2} alt='Product 2' className='w-60 h-72 object-cover rounded shadow-lg' />
          <h3 className='text-xl text-orange-700 mt-4'>Product 2</h3>
          <p className='text-gray-600'>Description of Product 2.</p>
        </div>
        <div className='flex flex-col items-center min-w-max transform transition-transform duration-300 hover:scale-110 hover:filter hover:sepia hover:brightness-135'>
          <img src={product3} alt='Product 3' className='w-60 h-72 object-cover rounded shadow-lg' />
          <h3 className='text-xl text-orange-700 mt-4'>Product 3</h3>
          <p className='text-gray-600'>Description of Product 3.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
