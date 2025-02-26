import { memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const VideoHero = memo(() => {
  console.log("Rendering VideoHero component");
  const isMobile = useIsMobile();
  console.log("isMobile:", isMobile);

  const videoSrc = isMobile
    ? "https://www.ironrockdressage.com/wp-content/uploads/2023/09/Website-Trailer-23MB.mp4"
    : "https://res.cloudinary.com/dye5zvd2q/video/upload/f_auto:video,q_auto/v1/Img/qdjnfjhd5s4t1koeszjh";

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#000C24]">
      {/* Degradados solo en móvil */}
      {isMobile && (
        <>
          {/* Degradado superior */}
          <div 
            className="absolute top-0 left-0 right-0 h-[40vh] z-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,12,36,0.9) 0%, rgba(0,12,36,0.7) 50%, rgba(0,12,36,0) 100%)'
            }}
          />
          
          {/* Degradado inferior */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[40vh] z-10"
            style={{
              background: 'linear-gradient(to top, rgba(0,12,36,0.9) 0%, rgba(0,12,36,0.7) 50%, rgba(0,12,36,0) 100%)'
            }}
          />
        </>
      )}

      {/* Contenedor de video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          aria-label="Video de fondo"
        >
          <source src={`${videoSrc}.mp4`} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </section>
  );
});

VideoHero.displayName = "VideoHero";

export default VideoHero;
