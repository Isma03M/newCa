import { Link } from "react-router-dom";
import { memo } from 'react';

const DressageSale = memo(() => {
  console.log("Rendering DressageSale component"); // Log para debugging

  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/19c3298a-df08-4e7a-98ec-8866b1bd6f6e.png"
          alt="Caballo de dressage"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-4 md:mb-6 tracking-wider">
          DRESSAGE HORSE SALE OPPORTUNITIES
        </h2>
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/eb42115a-92e6-4ca8-a529-ae8a41d14ffd.png" 
            alt="Divisor decorativo" 
            className="h-8 md:h-10"
            loading="lazy"
          />
        </div>
        <p className="max-w-sm md:max-w-xl lg:max-w-2xl text-base md:text-lg mb-8 md:mb-12 italic">
          Learn more about our exceptional dressage horses currently offered for sale by Iron Rock Dressage.
        </p>
        <Link
          to="/sales"
          className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001233] 
                   transition-colors duration-300 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg tracking-wider"
          aria-label="Ver caballos en venta"
        >
          VIEW SALES
        </Link>
      </div>
    </section>
  );
});

DressageSale.displayName = 'DressageSale';

export default DressageSale;