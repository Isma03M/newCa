import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";
import RevealImage from "../components/RevealImage";
import DreamEnvisioned from "../components/facilities/DreamEnvisioned";
import HeroSection from "../components/facilities/HeroSection";
import MainBarn from "../components/facilities/MainBarn";
import OutdoorArena from "../components/facilities/OutdoorArena";
import OtherFacilities from "../components/facilities/OtherFacilities";
import RevealImageFacilities1 from "@/components/RevealImageFacilities1";
import RevealImageFacilities2 from "@/components/RevealImageFacilities2";
import RevealImageFacilities3 from "@/components/RevealImageFacilities3";

const Facilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <DreamEnvisioned />
        <MainBarn />    
        <ImageGallery />
        <RevealImageFacilities1  />
        <OutdoorArena />
        <RevealImageFacilities2  />
        <OtherFacilities />
        <RevealImageFacilities3 />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;