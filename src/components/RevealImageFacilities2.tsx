import React from 'react';
import { Link } from 'react-router-dom';

interface RevealImageProps {
  imageUrl?: string;
}

const RevealImageFacilities2 = ({ imageUrl }: RevealImageProps) => {
  const defaultImage = "https://vet.tufts.edu/sites/g/files/lrezom951/files/styles/large/public/2023-01/iStock-1086631812.jpg?itok=74lyCyA1";
  
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
     
    </div>
  );
};

export default RevealImageFacilities2;
