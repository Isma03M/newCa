import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GaleriaBreend from "../components/galeriaBreend"; // Cambiado a mayúscula
import BreendHero from "@/components/BreendHero";

const BreendingProgram = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
      <BreendHero />

        <GaleriaBreend /> {/* Llamar al componente con mayúscula */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default BreendingProgram;
