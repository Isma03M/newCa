import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSalesMenuOpen, setIsSalesMenuOpen] = useState(false); // Estado para el submenú
  const [timeoutId, setTimeoutId] = useState(null); // Para manejar el temporizador

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "TEAM", path: "/team" },
    { label: "BREEDING PROGRAM", path: "/BreendingProgram" },
    { label: "SPONSORS", path: "/sponsors" },
    { label: "FACILITIES", path: "/facilities" },
    { label: "SALES", path: "/sales", hasSubmenu: true }, // Indica que este elemento tiene un submenú
    { label: "NEWS", path: "/news" },
    { label: "CONTACT", path: "/contact" },
  ];

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsSalesMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsSalesMenuOpen(false);
    }, 200); // Ajusta el tiempo de retraso según sea necesario
    setTimeoutId(id);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#001233]" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img 
                src="/Img/castañologo.png" 
                alt="El Castaño" 
                className="h-24 object-contain shadow-sm"  
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={item.hasSubmenu ? handleMouseEnter : undefined} // Abre el submenú al pasar el mouse
                  onMouseLeave={item.hasSubmenu ? handleMouseLeave : undefined} // Cierra el submenú con retraso al salir el mouse
                >
                  <Link
                    to={item.path}
                    className={`flex items-center text-white hover:text-[#C5B358] transition-colors duration-200 text-xs tracking-wider ${item.hasSubmenu ? 'cursor-pointer' : ''}`}
                  >
                    <span className="heading-secondary text-base md:text-base">{item.label}</span>
                    {item.hasSubmenu && (
                      <span className="ml-2 text-white">{isSalesMenuOpen ? '▲' : '▼'}</span> // Flecha hacia arriba o abajo
                    )}
                  </Link>

                  {/* Submenú para SALES */}
                  {item.hasSubmenu && isSalesMenuOpen && (
                    <div className="absolute left-0 mt-2 bg-[#001233] rounded-lg shadow-lg z-10">
                      <Link
                        to="/sales/sales-horses"
                        className="block px-4 py-2 text-white hover:text-[#C5B358] transition-colors duration-200 text-xs tracking-wider"
                        onClick={() => {
                          setIsSalesMenuOpen(false); // Cierra el submenú al hacer clic
                          setIsMobileMenuOpen(false); // También cierra el menú móvil si está abierto
                        }}
                      >
                        SOLD HORSES
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#001233] z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center space-y-6">
            {menuItems.map((item) => (
              <div key={item.label} className="w-full px-8">
                <Link
                  to={item.path}
                  onClick={() => {
                    if (item.label === "SALES") {
                      setIsSalesMenuOpen(!isSalesMenuOpen); // Alterna el submenú si SALES es seleccionado
                    } else {
                      setIsMobileMenuOpen(false); // Cierra el menú móvil para otros elementos
                    }
                  }}
                  className="text-white hover:text-[#C5B358] transition-colors duration-200 text-lg tracking-wider block text-center"
                >
                  <span className="heading-secondary text-base">{item.label}</span>
                </Link>

                {/* Mostrar SOLD HORSES directamente debajo de SALES en móvil */}
                {item.label === "SALES" && (
                  <div className="mt-2">
                    <Link
                      to="/sales/sales-horses"
                      onClick={() => {
                        setIsSalesMenuOpen(false); // Cierra el submenú al seleccionar SOLD HORSES
                        setIsMobileMenuOpen(false); // Cierra el menú móvil
                      }} 
                      className="text-white hover:text-[#C5B358] transition-colors duration-200 text-base tracking-wider block text-center pl-4"
                    >
                      SOLD HORSES
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
