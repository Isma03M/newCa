import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import SiteLinks from "@/components/contact/SiteLinks";
import ContactMap from "@/components/contact/ContactMap";
import LocationForm from "@/components/contact/LocationForm";

const ContactPage = () => {
  console.log("Rendering Contact page");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url("/lovable-uploads/ee3cd096-ee98-46c3-bd18-8f236634b81f.png")',
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-[50px] md:text-[70px] lg:text-[90px] font-serif text-white mb-12 text-left leading-none">
                CONTACT
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-serif text-white tracking-wide text-left leading-tight">
                WE LOOK FORWARD TO<br />
                HEARING FROM YOU!
              </p>
            </div>
          </div>
        </section>

        {/* Location Form Section */}
        <LocationForm />

        {/* Map Section */}
        <div className="w-full">
          <ContactMap />
        </div>

        <section className="relative bg-[#001233]">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <ContactInfo />
              </div>
              <div className="md:col-span-2">
                <ContactForm />
              </div>
              <div className="md:col-span-1">
                <SiteLinks />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;