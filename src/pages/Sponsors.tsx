import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SponsorsCarousel from "../components/Sponsors";

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#001233]">
      <Navbar />
      <main>
        <div className="relative h-screen">
          {/* Hero Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/Img/env3.jpg")',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-center text-white px-4 container mx-auto">
            <h1 className="text-6xl md:text-7xl font-serif mb-4 tracking-wide drop-shadow-lg text-left">
              PATROCINADORES
            </h1>
            
            {/* Decorative Element */}
            <div className="flex items-center w-48 mb-6">
              <div className="h-px w-20 bg-white"></div>
              <img 
                src="/lovable-uploads/0eac8b6a-9ebb-4cf0-ab5e-1b0181b5a63b.png" 
                alt="decorative" 
                className="mx-4 h-8 opacity-80"
              />
              <div className="h-px w-20 bg-white"></div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-serif tracking-wider drop-shadow-lg text-left">
            ¡GRACIAS A NUESTROS PATROCINADORES DE EVENTOS!            </h2>
          </div>
        </div>

        <SponsorsCarousel />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;