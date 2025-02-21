import React from 'react';

const OtherFacilities = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#001233] mb-8">
MAS INSTALACIONES          </h2>
          
          <div className="flex justify-center mb-12">
            <img 
              src="" 
              alt="Decorative divider" 
              className="h-8"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img 
              src="/Img/envFacili1.jpg" 
              alt="Covered six horse Kraft hot walker" 
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <p className="text-center text-lg font-serif text-[#001233]">
              Descripcion del lugar
            </p>
          </div>

          <div className="space-y-4">
            <img 
              src="/Img/envFacili1.jpg" 
              alt="60 foot covered round pen with Olympia footing" 
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <p className="text-center text-lg font-serif text-[#001233]">
              Descripcion del lugar
            </p>
          </div>

          <div className="space-y-4">
            <img 
              src="/Img/envFacili1.jpg" 
              alt="Eight paddocks with automatic waters and misters" 
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <p className="text-center text-lg font-serif text-[#001233]">
              Descripcion del lugar
            </p>
          </div>

          <div className="space-y-4">
            <img 
              src="/Img/envFacili1.jpg" 
              alt="50 acres of hillside trails" 
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <p className="text-center text-lg font-serif text-[#001233]">
              Descripcion del lugar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherFacilities;