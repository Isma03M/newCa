import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutMission from "../components/AboutMission";
import AboutProgram from "../components/AboutProgram";
import AboutFacilities from "../components/AboutFacilities";
import AboutTeamSection from "../components/AboutTeamSection";
import AboutSalesSection from "../components/AboutSalesSection";
import RevealImage from "../components/RevealImage";
import RevealImageAbout1 from "@/components/RevealImageAbout1";
import RevealImageAbout2 from "@/components/RevealImageAbout2";
import RevealImageAbout3 from "@/components/RevealImageAbout3";
import RevealImageAbout4 from "@/components/RevealImageAbout4";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutProgram />
        <RevealImageAbout1 />
        <AboutFacilities />
        <RevealImageAbout2 />
        <AboutTeamSection />
        <RevealImageAbout3 />
        <AboutSalesSection />
        <RevealImageAbout4 />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default About;