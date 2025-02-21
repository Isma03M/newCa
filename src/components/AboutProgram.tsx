import React from 'react';

const AboutProgram = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          {/* Imágenes arriba en móvil, derecha en laptop */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/Img/aboutP.jpg" 
                alt="Horse training" 
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <img 
                src="/Img/aboutP1.jpg" 
                alt="Horse training" 
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <img 
                src="/Img/aboutP2.jpg" 
                alt="Horse training" 
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <img 
                src="/Img/aboutP3.jpg" 
                alt="Horse training" 
                className="w-full h-[250px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Texto abajo en móvil, izquierda en laptop */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-center">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-3xl text-[#001233] font-serif mb-6">
                OUR PROGRAM
              </h2>
              <div className="flex justify-center lg:justify-center mb-6">
                <img 
                  src="/Img/divisor.png" 
                  alt="Decorative divider" 
                  className="h-6"
                />
              </div>
              <p className="text-[#001233] text-sm leading-relaxed font-serif">
                With an institutional framework built on excellence and a commitment to prioritizing health above all, our dedicated team—led by our head coach and supported by each horse’s rider, along with a specialized staff of nutritionists, farriers, and veterinarians—ensures every Lusitano receives world-class care and training.
              </p>
              <p className="text-[#001233] text-sm leading-relaxed font-serif mt-4">
                We take no shortcuts, fostering joy, health, and consistent progress at every stage. Thanks to this dedication, we have achieved multiple championships and, most importantly, created happy and successful partnerships between horse and rider across the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;
