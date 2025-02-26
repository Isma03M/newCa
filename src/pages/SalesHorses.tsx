import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HorseGrid from "@/components/horse/HorseGrid";

const SalesHorses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src="/Img/env3.jpg"
              alt="White dressage horse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl space-y-8 text-center">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-white tracking-wider">
              
              </h1>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/eb42115a-92e6-4ca8-a529-ae8a41d14ffd.png"
                  alt="Decorative divider"
                  className="h-8 object-contain"
                />
              </div>

              <p className="text-xl md:text-2xl lg:text-3xl font-serif text-white tracking-wide leading-relaxed">
               
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#001233] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide text-white">
                {/* NEW PARTNERS, BRIGHT FUTURES */}
              </h2>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/eb42115a-92e6-4ca8-a529-ae8a41d14ffd.png"
                  alt="Decorative divider"
                  className="h-8 object-contain"
                />
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-white max-w-3xl mx-auto">
                {/* New Partners, Exceptional Homes, Bright Futures Iron Rock Dressage is proud to facilitate strong matches between exceptional performance horses and capable riders. Our horses are excelling in the hands of both international professionals and top tier amateurs at both the FEI and CDI levels of competition. Our passion continues to grow with every successful partnership, and we are committed to growing the Iron Rock family with solid, capable, and talented horses. We invite you to our Testimonials page to hear from our clients first hand how they've found success in their Iron Rock partners. */}
              </p>
            </div>
          </div>
        </section>

        {/* Horse Grid Section */}
        <section className="py-20">
          <HorseGrid />
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default SalesHorses;