import { memo } from 'react';

const Footer = memo(() => {
  console.log("Rendering Footer component");
  
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img 
            src="/Img/logo.png" 
            alt="El Castaño" 
            className="h-16 object-contain"
          />
          <p className="text-gray-600 text-sm text-center font-serif italic">
          Copyright © 2025 El Castaño. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;