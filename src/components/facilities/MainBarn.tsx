import React from 'react';

const MainBarn = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <img 
            src="/lovable-uploads/ce7320df-f55d-4e44-a5c2-771179c674b0.png" 
            alt="Exterior facilities with lavender garden" 
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <img 
            src="/lovable-uploads/ce7320df-f55d-4e44-a5c2-771179c674b0.png" 
            alt="Interior stable view" 
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
        
        <div className="mb-12">
          <img 
            src="/lovable-uploads/ce7320df-f55d-4e44-a5c2-771179c674b0.png" 
            alt="Horse facilities" 
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div> */}

        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#001233] mb-8">
            MAIN BARN
          </h2>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/eb42115a-92e6-4ca8-a529-ae8a41d14ffd.png" 
              alt="Decorative divider" 
              className="h-8"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <p className="text-lg font-serif text-[#001233] leading-relaxed mb-8">
                The main barn is a stunning open air concept structure housing five large 440 
                square foot stalls each equipped with security cameras, automatic waterers, a 
                natural FlyFree spray system, fans, and misters to keep horses comfortable in the 
                California heat. They are also outfitted with automatic hay feeders which ensure 
                horses are fed every 4 hours night and day. Additional stall space can be found in 
                the four 16x16 upper stalls and five 12x16 lower stalls on the grounds.
              </p>
              <p className="text-lg font-serif text-[#001233] leading-relaxed">
                The main barn also houses two heated grooming bays, a hot water wash rack with 
                solarium, feed room, tack room, shavings room, event hall, and an onsite 
                manager's apartment.
              </p>
            </div>

            <div>
              <p className="text-lg font-serif text-[#001233] leading-relaxed mb-6">
                In addition to the barn amenities, Iron Rock provides their horses with regularly 
                scheduled therapeutic care utilizing the following equipment:
              </p>
              <ul className="text-lg font-serif text-[#001233] leading-relaxed space-y-4">
                <li>• Fodder machine to grow non-GMO, energy dense organic fodder for the horses</li>
                <li>• 12x12 Theraplatе stall to increase circulation and reduce inflammation</li>
                <li>• Solarium Heater</li>
                <li>• US Horse Gym Ice spa</li>
                <li>• US Horse Gym water Treadmill</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBarn;