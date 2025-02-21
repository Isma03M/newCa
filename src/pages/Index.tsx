
import { Suspense, lazy, useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutMissionSubscribe from "@/components/IndexSuscribirse";

// Lazy load components
const VideoHero = lazy(() => import("../components/VideoHero"));
const Mission = lazy(() => import("../components/Mission"));
const ImagesSection = lazy(() => import("../components/ImagesSection"));
const NewsAndTeam = lazy(() => import("../components/NewsAndTeam"));
const TakeTour = lazy(() => import("../components/TakeTour"));
const RevealImage = lazy(() => import("@/components/RevealImage"));
const SponsorInicio = lazy(() => import("@/components/SponsorInicio"));

const LoadingComponent = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#001233]">
    <div className="text-white text-2xl font-serif"></div>
  </div>
);

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("Rendering Index component");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingComponent />}>
          <VideoHero />
        </Suspense>
        <div className="my-8"> {/* Agrega un espacio entre los componentes */}
  {/* Puedes ajustar el valor de 'my-8' según el espacio que desees */}
</div>
        
        <Suspense fallback={<LoadingComponent />}>
          <ImagesSection />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <RevealImage />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <Mission />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <NewsAndTeam />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <TakeTour />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <AboutMissionSubscribe />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <SponsorInicio />
        </Suspense>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
