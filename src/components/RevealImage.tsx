import React from 'react';
import { Link } from 'react-router-dom';

interface RevealImageProps {
  imageUrl?: string;
}

const RevealImage = ({ imageUrl }: RevealImageProps) => {
  const defaultImage = "/Img/13.jpg";

  return (
    <div 
      className="relative h-[600px] overflow-hidden flex items-center justify-center text-center"
      style={{
        position: 'relative',
        zIndex: 1
      }}
    >
     <div 
        style={{
          backgroundImage: `url("${imageUrl || defaultImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      />

      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-4 md:mb-6">
          Exclusive Dressage Horse Sales – Your Chance to Ride Excellence
        </h1>
        <div className="flex justify-center mb-12">
          <img
            src="/Img/divisor.png"
            alt="Divisor decorativo"
            className="h-8"
            loading="eager"
          />
        </div>
        <p className="max-w-sm md:max-w-xl lg:max-w-2xl text-base md:text-lg mb-8 md:mb-12">
          Discover impeccably bred and masterfully trained Lusitanos, ready to elevate your dressage journey.
        </p>
        <Link
          to="/sales"
          className="relative inline-block rounded-md overflow-hidden transition-colors duration-300 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg tracking-wider border-2 border-white"
          aria-label="Aprende más sobre Iron Rock Dressage"
          style={{
            backgroundImage: 'url("/Img/plateado.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span className="text-[#001233] rounded-md px-8 py-3 text-sm w-auto max-w-[200px]">VIEW SALES</span>
        </Link>
      </div>
    </div>
  );
};

export default RevealImage;
