import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Asegúrate de que la importación es correcta

const AboutFacilities = () => {
  const navigate = useNavigate(); // Hook para navegación

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Images Column - En móvil está arriba, en laptop a la izquierda */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/Img/AbooutF1.jpg" 
                alt="Horse facilities view 1" 
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <img 
                src="/Img/AboutF2.jpg" 
                alt="Horse facilities view 2" 
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <img 
                src="/Img/AboutF3.jpg" 
                alt="Horse facilities view 3" 
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <img 
                src="/Img/AboutF4.jpg" 
                alt="Horse facilities view 4" 
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Text Content - En móvil está abajo, en laptop a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-center justify-center text-center md:text-center">
            <h1 className="text-[#001233] text-3xl md:text-4xl font-semibold mb-6">
              Our Facilities
            </h1>
            
            <div className="flex justify-center md:justify-center mb-6">
              <img 
                src="/Img/divisor.png" 
                alt="Decorative divider" 
                className="h-8"
              />
            </div>

            <p className="text-[#001233] text-lg md:text-xl leading-relaxed mb-8">
              Nestled at the foot of the majestic Sierra Madre Mountains, EC Dressage opened its doors in 2021, establishing world-class facilities designed for excellence. Our stunning 10-acre farm features comfortable, state-of-the-art stables, top-tier training arenas, and expansive recreational paddocks, providing the ideal environment for 90 horses to thrive in both training and leisure.
            </p>

            <Button
              className="text-[#001233] rounded-md px-8 py-3 text-sm w-auto max-w-[200px]"
              variant="outline"
              style={{
                backgroundImage: 'url("/Img/plateado.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => navigate('/facilities')} // Redirige a la ruta deseada
            >
              View Full Facilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFacilities;
