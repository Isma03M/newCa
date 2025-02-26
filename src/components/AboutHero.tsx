import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative h-screen">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/Img/aboutsv.jpg")',
        }}
      >
        <img 
          src="/Img/aboutsv.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="1080"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-center items-start px-4 md:px-20 max-w-7xl mx-auto">
        <h1 className="heading-primary text-white mb-6">ABOUT</h1>
        <div className="flex justify-center mb-4">
          <img
            src="/Img/divisor.png"
            alt="Divisor decorativo"
            className="h-8"
            loading="eager"
            fetchPriority="high"
          />
        </div>        
        <p className="subtitle text-white max-w-2xl">
          Providing Lusitanos with outstanding genetics and world-class training for professional competitors and amateur riders.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
