import React from 'react';

const OutdoorArena = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Images */}
          <div className="grid grid-cols-2 gap-4">
  <img 
    src="/Img/1.jpg" 
    alt="Outdoor arena view 1" 
    className="w-full h-48 object-contain rounded-lg"  // Mantengo la altura pero ajusto el ancho
  />
  <img 
    src="/Img/5.jpg" 
    alt="Outdoor arena view 2" 
    className="w-full h-48 object-contain rounded-lg"
  />
  <img 
    src="/Img/3.jpg" 
    alt="Outdoor arena view 3" 
    className="w-full h-48 object-contain rounded-lg"
  />
  <img 
    src="/Img/5.jpg" 
    alt="Outdoor arena view 4" 
    className="w-full h-48 object-contain rounded-lg"
  />
</div>


          {/* Right side - Text content */}
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#001233] mb-8">
            ARENA AL AIRE LIBRE            </h2>
            
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/eb42115a-92e6-4ca8-a529-ae8a41d14ffd.png" 
                alt="Decorative divider" 
                className="h-8"
              />
            </div>

            <p className="text-lg font-serif text-[#001233] leading-relaxed">
            Contamos con un moderno estadio al aire libre, diseñado para proporcionar una experiencia inigualable de entrenamiento. Equipado con espejos y una zona de observación cubierta para mayor comodidad, el lugar también ofrece un sistema de sonido de alta calidad y una elegante cascada tallada en la ladera, que aporta un toque natural al entorno. La arena, con una base ideal para todo clima, cuenta con un avanzado sistema de riego que garantiza condiciones óptimas en todo momento. Todo esto, acompañado de una vista espectacular que completa la experiencia única que Castaño ofrece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutdoorArena;