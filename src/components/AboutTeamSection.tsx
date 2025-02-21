import { Link, useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate
import { Button } from "@/components/ui/button"; // Asegúrate de que la importación es correcta

const AboutTeamSection = () => {
  const navigate = useNavigate(); // Hook para navegación

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Text Content - En móvil está abajo, en laptop a la izquierda */}
          <div className="max-w-xl order-2 md:order-1 text-center md:text-center">
            <div className="mb-12 md:mb-8">
              <h2 className="text-4xl md:text-5xl font-serif text-[#001233] mb-8">
                OUR TEAM
              </h2>
              <div className="flex justify-center md:justify-center mb-8">
                <img 
                  src="/Img/divisor.png" 
                  alt="Decorative divider" 
                  className="h-8"
                />
              </div>
            </div>
            <p className="text-lg md:text-xl text-[#001233] leading-relaxed font-serif mb-12">
              Our head coach, Antonio Cid, is a world-class trainer with elite experience in top-tier competitions, including multiple Olympic equestrian qualifications and representing Spain in World Championships. He leads a team of exceptional professional riders dedicated to continuous learning and, above all, ensuring that every horse’s training experience is effortless, enjoyable, and enriching. 
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
              LEARN MORE
            </Button>
          </div>

          {/* Images Column - En móvil están arriba, en laptop a la derecha */}
          <div className="grid grid-cols-2 gap-4 order-1 md:order-2 w-full md:w-[400px]">
            <img 
              src="/Img/AbooutF1.jpg" 
              alt="Team member with horse" 
              className="w-full h-[140px] object-cover rounded-lg shadow-lg"
            />
            <img 
              src="/Img/AboutF2.jpg" 
              alt="Team member riding horse" 
              className="w-full h-[140px] object-cover rounded-lg shadow-lg"
            />
            <img 
              src="/Img/AboutF3.jpg" 
              alt="Team member training" 
              className="w-full h-[140px] object-cover rounded-lg shadow-lg"
            />
            <img 
              src="/Img/AboutF4.jpg" 
              alt="Team member with horse" 
              className="w-full h-[140px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
