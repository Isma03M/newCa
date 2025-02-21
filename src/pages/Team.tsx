import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TeamHero from "../components/TeamHero";
import TeamTable from "../components/TeamTable";
import TeamTable2 from "../components/TeamTable2";
import TeamTable3 from "../components/TeamTable3";
import TeamTable4 from "../components/TeamTable4";
import TeamTable5 from "../components/TeamTable5";
import RevealImage from "../components/RevealImage";
import RevealImageTeam1 from "@/components/RevealImageTeam1";
import RevealImageTeam2 from "@/components/RevealImageTeam2";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <TeamHero />
        <TeamTable />
        <RevealImageTeam1 />
        <TeamTable2 />
        <RevealImageTeam2  />
        <TeamTable3 />
        <TeamTable4 />
        <TeamTable5 />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Team;