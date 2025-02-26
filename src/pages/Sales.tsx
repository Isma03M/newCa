import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Sales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src="/Img/3.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl space-y-8 text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-wider">
VENTAS              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-wide">
              CABALLOS DE DOMA DE PRIMER NIVEL LISTOS PARA EXCELIR EN LOS NIVELES DE COMPETENCIA FEI Y CDI              </h2>
              
              {/* Decorative Divider */}
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/eb42115a-92e6-4ca8-a529-ae8a41d14ffd.png"
                  alt="Decorative divider"
                  className="h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section with Dark Blue Background */}
        <section className="bg-[#001B41] py-20">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h3 className="text-3xl md:text-4xl font-serif text-white tracking-wide">
              CABALLOS DE DOMA EXCEPCIONALES              </h3>
              <p className="text-lg md:text-xl text-white/90 font-serif leading-relaxed tracking-wide">
texto llamativo              </p>
              <p className="text-lg text-white/90 font-serif leading-relaxed">
              CABALLOS DE DOMA DE PRIMER NIVEL LISTOS PARA EXCELIR EN LOS NIVELES DE COMPETENCIA FEI Y CDI
              </p>
            </div>
          </div>
        </section>

        {/* Price Categories Section */}
        <section className="py-20 px-4">
          <h2 className="text-center text-4xl font-serif tracking-wider mb-12">
CATEGORIA DE PRECIOS          </h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-[#F1F1F1] p-6 flex items-center justify-center">
              <p className="text-center font-serif text-lg tracking-wide">
                A: $200k+
              </p>
            </div>
            <div className="bg-[#E5E5E5] p-6 flex items-center justify-center">
              <p className="text-center font-serif text-lg tracking-wide">
                B: $150k - $200k
              </p>
            </div>
            <div className="bg-[#DADADA] p-6 flex items-center justify-center">
              <p className="text-center font-serif text-lg tracking-wide">
                C: $100k - $150k
              </p>
            </div>
            <div className="bg-[#CCCCCC] p-6 flex items-center justify-center">
              <p className="text-center font-serif text-lg tracking-wide">
                D: $50k - $100k
              </p>
            </div>
            <div className="bg-[#C0C0C0] p-6 flex items-center justify-center">
              <p className="text-center font-serif text-lg tracking-wide">
                E: &lt; $50k
              </p>
            </div>
          </div>
        </section>

        {/* Horses Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Horse Card 1 */}
            <div className="border border-gray-200">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/6e1487de-6abb-447c-ba8c-a5bac276ff09.png" 
                  alt=""
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <img 
                    src="/Img/logo.png"
                    alt="Iron Rock Logo"
                    className="w-48 h-48"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-center mb-2"></h3>
                <p className="text-center text-sm mb-6 italic"></p>
                <p className="text-center text-xs mb-4"></p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-bold">RANGO DE PRECIOS</p>
                    <p>C</p>
                  </div>
                  <div>
                    <p className="font-bold">NIVEL</p>
                    <p>NIVEL AQUI</p>
                  </div>
                  <div>
                    <p className="font-bold">UBICACION</p>
                    <p>MONTERREY</p>
                  </div>
                </div>

                <Link 
                  to="/sales/aaaaa"
                  className="block w-48 mx-auto text-center bg-gray-200 py-2 hover:bg-gray-300 transition-colors"
                >
                  VER DETALLES
                </Link>
              </div>
            </div>

            {/* Horse Card 2 */}
            <div className="border border-gray-200">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/6e1487de-6abb-447c-ba8c-a5bac276ff09.png" 
                  alt=""
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <img 
                    src="/Img/logo.png"
                    alt="Castaño Logo"
                    className="w-48 h-48"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-center mb-2"></h3>
                <p className="text-center text-sm mb-6 italic"></p>
                <p className="text-center text-xs mb-4"></p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-bold">RANGO DE PRECIO</p>
                    <p>D</p>
                  </div>
                  <div>
                    <p className="font-bold">NIVEL</p>
                    <p></p>
                  </div>
                  <div>
                    <p className="font-bold">UBICACIÓN</p>
                    <p></p>
                  </div>
                </div>

                <Link 
                  to="/sales/aaa"
                  className="block w-48 mx-auto text-center bg-gray-200 py-2 hover:bg-gray-300 transition-colors"
                >
                  VER DETALLES
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Sales;