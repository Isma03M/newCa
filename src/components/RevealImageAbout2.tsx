import React from 'react';
import { Link } from 'react-router-dom';

interface RevealImageProps {
  imageUrl?: string;
}

const RevealImageAbout2 = ({ imageUrl }: RevealImageProps) => {
  const defaultImage = "/Img/AboutF5.jpg"
  return (
    <div 
      className="relative h-[600px] overflow-hidden flex items-center justify-center text-center"
      style={{
        position: 'relative',
        zIndex: 1
      }}
    >
      <div 
        style={{
          backgroundImage: `url("${imageUrl || defaultImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      />
      {/* El bloque de contenido debe estar dentro del contenedor principal */}
    
    </div>
  );
};

export default RevealImageAbout2;
