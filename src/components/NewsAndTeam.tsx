import { Link, useNavigate } from "react-router-dom";
import { memo } from 'react';
import { Button } from "@/components/ui/button"; // Asegúrate de importar el componente Button correctamente

const NewsAndTeam = memo(() => {
  console.log("Rendering NewsAndTeam component"); // Log para debugging

  const navigate = useNavigate(); // Hook para navegación

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Panel de Noticias */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="/Img/11.jpg"
            alt="Jinete de dressage"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            NEWS
          </h2>
          <div className="flex justify-center mb-8">
            <img
              src="/Img/divisor.png"
              alt="Divisor decorativo"
              className="h-8"
              loading="lazy"
            />
          </div>
          <p className="max-w-lg text-base md:text-lg mb-8 italic">
            See the latest news from our world-class breeding program, competition results, and success stories from our sold horses and their inspiring riders.
          </p>

          <Button
            className="text-[#001233] rounded-md px-8 py-3 text-sm w-auto max-w-[200px]"
            variant="outline"
            style={{
              backgroundImage: 'url("/Img/plateado.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => navigate('/news')} // Redirige a la ruta deseada

          >
            View News
          </Button>
        </div>
      </div>

      {/* Panel del Equipo */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="/Img/12.jpg"
            alt="Equipo Iron Rock"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            EC Dressage Team
          </h2>
          <div className="flex justify-center mb-12">
            <img
              src="/Img/divisor.png"
              alt="Divisor decorativo"
              className="h-8"
              loading="lazy"
            />
          </div>
          <p className="max-w-lg text-base md:text-lg mb-8 italic">
            Meet our head coach, Antonio Cid—a world-class trainer with elite experience in top-tier competitions—alongside our amazing riders who continue to impress at every event.
          </p>

          <Button
            className="text-[#001233] rounded-md px-8 py-3 text-sm w-auto max-w-[200px]"
            variant="outline"
            style={{
              backgroundImage: 'url("/Img/plateado.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => navigate('/team')} // Redirige a la ruta deseada

          >
            View Team
          </Button>
        </div>
      </div>
    </section>
  );
});

NewsAndTeam.displayName = 'NewsAndTeam';

export default NewsAndTeam;
