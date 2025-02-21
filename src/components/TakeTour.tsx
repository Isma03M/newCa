
import { memo } from 'react';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

const TakeTour = memo(() => {
  console.log("Rendering TakeTour component");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[600px]">
      {/* Video de fondo */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Img/Videotake.mp4" type="video/mp4" />
      </video>

      {/* Capa de superposición oscura */}
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
          <h2 className="text-5xl font-serif mb-6">TAKE A TOUR
          </h2>
          <div className="flex justify-center mb-12">
        <img
          src="/Img/divisor.png"
          alt="Divisor decorativo"
          className="h-8"
          loading="lazy"
        />
      </div>          <p className="text-xl mb-4 text-center max-w-3xl">
          View our wold class facilieties and stunning Mountains at EC Dressage.
         </p>
         <Button 
  className="text-[#001233] rounded-md px-8 py-3 text-sm w-auto max-w-[200px]"
  variant="outline" 
  style={{
    backgroundImage: 'url("/Img/plateado.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  View Facility
</Button>


        </div>
      </div>

      {/* Botón circular para volver arriba */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 group"
        aria-label="Volver arriba"
      >
        <div className="flex flex-col items-center">
          <ArrowUp className="h-4 w-4 text-black group-hover:-translate-y-1 transition-transform duration-300" />
          <ArrowUp className="h-4 w-4 text-black -mt-2 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </button>
    </section>
  );
});

TakeTour.displayName = 'TakeTour';

export default TakeTour;
