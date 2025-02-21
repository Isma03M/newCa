
import { memo } from 'react';

const ImagesSection = memo(() => {
  console.log("Rendering ImagesSection component");

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <picture>
            <source srcSet="/Img/14.webp" type="image/webp" />
            <img 
              src="/Img/14.jpg" 
              alt="Caballo en entrenamiento" 
              className="w-full h-[300px] object-cover rounded-lg"
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
            />
          </picture>
          <picture>
            <source srcSet="/Img/15.webp" type="image/webp" />
            <img 
              src="/Img/15.jpg" 
              alt="Caballo en entrenamiento" 
              className="w-full h-[300px] object-cover rounded-lg"
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
            />
          </picture>
          <picture>
            <source srcSet="/Img/16.webp" type="image/webp" />
            <img 
              src="/Img/16.jpg" 
              alt="Caballo en entrenamiento" 
              className="w-full h-[300px] object-cover rounded-lg"
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
            />
          </picture>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-primary text-[#001233] mb-8">
          Exceptional Lusitano Dressage Horses
          </h2>
          <h3 className="heading-secondary text-[#001233] mb-12 italic">
          boasting the finest bloodlines and world-class training.          </h3>
          <div className="flex justify-center mb-12">
            <img 
              src="/Img/divisor.png" 
              alt="Divisor decorativo" 
              className="h-8"
              loading="lazy"
            />
          </div>
          <p className="body-text text-[#001233] leading-relaxed mb-8">
          EC Dressage is a world-class training and sales facility dedicated to producing top-tier dressage competitors in the breathtaking landscape of Monterrey, Mexico. With a commitment to excellence, the EC Dressage team takes pride in developing Lusitanos with exceptional temperaments and superior movement, crafted for elite competitors and discerning amateur riders who seek unparalleled excellence.

          </p>
        </div>
      </div>
    </section>
  );
});

ImagesSection.displayName = 'ImagesSection';

export default ImagesSection;
