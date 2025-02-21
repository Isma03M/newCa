import { memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const VideoHero = memo(() => {
  console.log("Rendering VideoHero component");
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full h-screen flex flex-col">
      {/* Fondo de degradado en móviles */}
      {isMobile && (
        <>
          {/* Degradado superior: de negro a azul oscuro (más pequeño) */}
          <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-black to-[#001233] z-10"></div>
          {/* Degradado inferior: de azul oscuro a negro (más pequeño) */}
          <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-[#001233] to-black z-10"></div>
        </>
      )}

      {/* Contenedor del video debajo del degradado */}
      <div className={`absolute inset-x-0 ${isMobile ? "top-[15%]" : "top-0"} z-0 flex items-center justify-center bg-[#001233]`}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className={`w-full object-cover ${isMobile ? "h-[70vh]" : "h-full min-h-screen"}`}
          aria-label="Video de fondo de castano"
        >
          <source 
            src="/Img/El Castaño Teaser.mp4" 
            type="video/mp4" 
          />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </section>
  );
});

VideoHero.displayName = 'VideoHero';

export default VideoHero;
