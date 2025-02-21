import React from "react";

const GaleriaBreend = () => { // Cambiado a mayúscula
  const images = [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    "/path/to/image4.jpg",
    "/path/to/image5.jpg",
    "/path/to/image6.jpg",
    // Agrega más rutas de imágenes según sea necesario
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Breeding Program</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={src} 
              alt={`Breeding Program Image ${index + 1}`} 
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaBreend; // Cambiado a mayúscula
