import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutMissionSubscribe from "@/components/IndexSuscribirse";
import VideoHero from "../components/VideoHero";
import Mission from "../components/Mission";
import ImagesSection from "../components/ImagesSection";
import NewsAndTeam from "../components/NewsAndTeam";
import TakeTour from "../components/TakeTour";
import RevealImage from "@/components/RevealImage";
import SponsorInicio from "@/components/SponsorInicio";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("Rendering Index component");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <VideoHero />
        <div className="my-8"></div>
        <ImagesSection />
        <RevealImage />
        <Mission />
        <NewsAndTeam />
        <TakeTour />
        <AboutMissionSubscribe />
        <SponsorInicio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
