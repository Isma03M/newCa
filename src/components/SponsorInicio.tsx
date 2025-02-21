import { memo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const SponsorInicio = memo(() => {
  console.log("Rendering Sponsors component");

  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice actual del carrusel

  const sponsors = [
    {
      name: "ROMFH",
      image: "/lovable-uploads/0eac8b6a-9ebb-4cf0-ab5e-1b0181b5a63b.png",
      description: "A collection of riding apparel that truly embraces the beauty of the athlete, for all shapes, sizes, and disciplines, from schooling to Grand Prix. Celebrate Your Equestrian Lifestyle.",
      website: "www.romfh.com"
    },
    {
      name: "EQYSS",
      image: "/lovable-uploads/0eac8b6a-9ebb-4cf0-ab5e-1b0181b5a63b.png",
      description: "EQyss equine and pet grooming products are natural, botanical, and trusted since 1991. Crafted in small batches with the safest human-grade ingredients.",
      website: "www.eqyss.com"
    },
    {
      name: "HYGAIN",
      image: "/lovable-uploads/0eac8b6a-9ebb-4cf0-ab5e-1b0181b5a63b.png",
      description: "Premium equine nutrition and supplements designed to enhance performance and well-being.",
      website: "www.hygain.com"
    },
  ];

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsors.length) % sponsors.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Mostrar solo el slide actual */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Logo */}
            <div className="w-full md:w-1/3">
              <img
                src={sponsors[currentIndex].image}
                alt={`${sponsors[currentIndex].name} logo`}
                className="w-full max-w-[300px] h-auto object-contain mx-auto md:mx-0"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 space-y-4">
              <h3 className="text-3xl font-serif tracking-wide">{sponsors[currentIndex].name}</h3>
              <p className="text-gray-600 leading-relaxed">{sponsors[currentIndex].description}</p>
              <a
                href={`https://${sponsors[currentIndex].website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {sponsors[currentIndex].website}
              </a>
            </div>
          </div>

          {/* Flechas de navegación personalizadas */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer" onClick={prevSlide}>
            <button className="bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
              &#10094; {/* Flecha hacia la izquierda */}
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer" onClick={nextSlide}>
            <button className="bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
              &#10095; {/* Flecha hacia la derecha */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

SponsorInicio.displayName = 'Sponsors';

export default SponsorInicio;
