import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HorseDetails = () => {
  const { horseId } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Viewing details for horse:", horseId);
  }, [horseId]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HorseDetails;