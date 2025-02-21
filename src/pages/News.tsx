import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/lovable-uploads/23e4f4e5-bf50-463d-90c0-a979f38f59a6.png")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-4 container mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-serif mb-6 text-white">
              NEWS
            </h1>
            
            {/* Decorative Divider */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/eb42115a-92e6-4ca8-a529-ae8a41d14ffd.png" 
                alt="Divisor decorativo" 
                className="h-8"
              />
            </div>

            {/* Subtitle */}
            <div>
              <p className="text-xl md:text-2xl tracking-wide leading-relaxed font-serif text-white">
                SEE THE LATEST NEWS
                <br />
                AND UPDATES FROM
                <br />
                IRON ROCK DRESSAGE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-[#001233] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">
              UPCOMING EVENTS
            </h2>
            
            {/* Decorative Divider */}
            <div className="flex justify-center mb-12">
              <img 
                src="/lovable-uploads/eb42115a-92e6-4ca8-a529-ae8a41d14ffd.png" 
                alt="Divisor decorativo" 
                className="h-8"
              />
            </div>

            <p className="text-2xl font-serif text-white tracking-wide">
              WE CURRENTLY DO NOT HAVE ANY SCHEDULED EVENTS.
            </p>
          </div>
        </div>
      </section>

      {/* News Content Section */}
      <section className="bg-[#001233] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-white/80">Content coming soon...</p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default News;
