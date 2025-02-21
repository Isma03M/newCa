
import { memo, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const VideoHero = memo(() => {
  console.log("Rendering VideoHero component");
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute('preload', 'auto');
    }
  }, []);

  return (
    <section className="relative w-full h-screen">
      {/* Logo */}
      <div className="absolute top-0 left-0 w-full flex justify-center items-center z-20 pt-4">
        <picture>
          <source srcSet="/Img/castañologo.webp" type="image/webp" />
          <img 
            src="/Img/castañologo.png" 
            alt="El Castaño Logo" 
            className="w-40 md:w-48 lg:w-56"
            width="224"
            height="80"
          />
        </picture>
      </div>

      {/* Degradados */}
      {isMobile && (
        <>
          <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-black to-[#001233] z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-[#001233] to-black z-10"></div>
        </>
      )}

      {/* Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#001233]">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          aria-label="Video de fondo de castano"
        >
          <source 
            src="/Img/El Castaño Teaser.mp4" 
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
