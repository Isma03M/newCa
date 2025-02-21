
import React from 'react';

const AboutMission = () => {
  return (
    <section className="py-20 bg-[#001233]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="heading-primary text-white mb-8">
          EC Dressage Promise: Success in every ride.
          </h2>
          <div className="flex justify-center mb-12">
            <img 
              src="/Img/divisor.png" 
              alt="Decorative divider" 
              className="h-8"
            />
          </div>
          <p className="body-text text-white leading-relaxed">
          At EC Dressage, we promise to uphold the highest standards in breeding, training, and developing exceptional Lusitanos. With a commitment to outstanding genetics, world-class training, and personalized rider-horse pairings, we ensure that every horse is prepared to excel—whether in professional competition or bringing joy to dedicated amateur riders. Our passion for horses drives us to create lasting partnerships built on trust, excellence, and success in every stride.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
