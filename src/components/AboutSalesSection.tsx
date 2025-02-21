import { Link, useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate
import { Button } from "@/components/ui/button"; // Asegúrate de que la importación es correcta

const AboutSalesSection = () => {
  const navigate = useNavigate(); // Hook para navegación

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="/Img/3.jpg" 
              alt="Horse in training 1" 
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <img 
              src="/Img/3.jpg" 
              alt="Horse in training 2" 
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <img 
              src="/Img/3.jpg" 
              alt="Horse in training 3" 
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <img 
              src="/Img/3.jpg" 
              alt="Horse in training 4" 
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#001233] mb-8 text-center">
              OUR SALES OFFERINGS
            </h2>
            <div className="mb-8">
              <img 
                src="/Img/divisor.png" 
                alt="Decorative divider" 
                className="h-8"
              />
            </div>
            <p className="text-lg md:text-xl text-[#001233] leading-relaxed mb-8 text-center max-w-lg">
              From breeding and raising young prospects to developing Grand Prix competitors, we offer Lusitanos suited for every level—both professional and amateur. Our commitment is to finding your perfect match, ensuring success and harmony in every ride.
            </p>
            <Button
              className="text-[#001233] rounded-md px-8 py-3 text-sm w-auto max-w-[200px]"
              variant="outline"
              style={{
                backgroundImage: 'url("/Img/plateado.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => navigate('/sales')} // Redirige a la ruta deseada
            >
              VIEW SALES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSalesSection;
