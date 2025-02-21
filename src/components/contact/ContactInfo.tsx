import React from 'react';

const ContactInfo = () => {
  return (
    <div>
      <h2 className="heading-secondary mb-4 text-white text-center text-lg">Contact Information</h2>
      <div className="flex justify-center mb-6">
        <img
          src="/Img/divisor.png"
          alt="Divisor decorativo"
          className="h-8"
          loading="lazy"
        />
      </div>
      <div className="space-y-8 text-white text-center text-sm">
        <div className="space-y-1 body-text">
          <p>43e</p>
          <p>F4</p>
          <p>MTY, TEXAS</p>
        </div>

        <div className="space-y-1 body-text">
          <p>📞 +52 81 2437 4446</p>
          <p>📧 sales@elcastano.com</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="heading-secondary mb-4 text-lg flex flex-col items-center">STAY CONNECTED</h3>
          <div className="flex justify-center mb-4">
            <img
              src="/Img/divisor.png"
              alt="Divisor decorativo"
              className="h-8"
              loading="lazy"
            />
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-[#C5B358] transition-colors">
              <img src="/Img/1.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#C5B358] transition-colors">
              <img src="/Img/2.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#C5B358] transition-colors">
              <img src="/Img/3.png" alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#C5B358] transition-colors">
              <img src="/Img/4.png" alt="Music" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
