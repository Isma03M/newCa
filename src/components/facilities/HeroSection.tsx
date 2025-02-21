
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/Img/env3.jpg")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="heading-primary text-white text-left">
            FACILITIES
          </h1>
          
          <div className="w-24 h-0.5 bg-[#C5B358] mb-8"></div>

          <p className="subtitle text-white text-left">
          World-class facilities designed for the comfort, training, and peak performance of our Lusitanos. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
