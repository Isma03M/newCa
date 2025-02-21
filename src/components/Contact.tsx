import { memo } from 'react';
import ContactMessage from './contact/ContactMessage';
import ContactForm from './contact/ContactForm';
import SiteLinks from './contact/SiteLinks';
import ContactInfo from './contact/ContactInfo';

const Contact = memo(() => {
  console.log("Rendering Contact component");

  return (
    <section 
      className="relative bg-[#001233] py-20" 
      style={{ 
        backgroundImage: 'url("/Img/3.jpg"),linear-gradient(rgba(0, 38, 77, 0.7), rgba(0, 38, 77, 0.7))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-blue-800 opacity-70"></div> {/* Filtro azul con opacidad */}

      <div className="container mx-auto px-4 relative">
        <ContactMessage />

        {/* Grid container con diferente orden en móvil y escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* En móviles aparece primero el formulario, luego ContactInfo y después SiteLinks */}
          <div className="flex justify-center items-center md:order-1 order-2">
            <ContactInfo />
          </div>
          <div className="flex justify-center items-center md:order-2 order-1">
            <ContactForm />
          </div>
          <div className="flex justify-center items-center md:order-3 order-3">
            <SiteLinks />
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
