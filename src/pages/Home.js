import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import DynamicHighlights from '../components/DynamicHighlights';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <DynamicHighlights />
      <Footer />
    </div>
  );
};

export default Home;
