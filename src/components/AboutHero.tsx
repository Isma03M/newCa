
import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/Img/aboutsv.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-start px-4 md:px-20 max-w-7xl mx-auto">
        <h1 className="heading-primary text-white mb-6">
          ABOUT
        </h1>
        <div className="flex justify-center mb-4">
            <img
              src="/Img/divisor.png"
              alt="Divisor decorativo"
              className="h-8"
              loading="lazy"
            />
          </div>        <p className="subtitle text-white max-w-2xl">
        Providing Lusitanos with outstanding genetics and world-class training for professional competitors and amateur riders.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
