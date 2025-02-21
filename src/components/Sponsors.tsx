import { memo } from 'react';
import { ExternalLink } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Sponsors = memo(() => {
  console.log("Rendering Sponsors component");

  const sponsors = [
    {
      name: "NOMBRE PATROCINADOR",
      image: "",
      description: "Descripcion del patrocinador.",
      website: "sitio del patrocinador"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {sponsors.map((sponsor, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Logo */}
                <div className="w-full md:w-1/3">
                  <img
                    src={sponsor.image}
                    alt={`${sponsor.name} logo`}
                    className="w-full max-w-[300px] h-auto object-contain mx-auto md:mx-0"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-3xl font-serif tracking-wide">{sponsor.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{sponsor.description}</p>
                  <a 
                    href={`https://${sponsor.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {sponsor.website}
                  </a>
                </div>
              </div>
              
              {/* Separator - don't show after last item */}
              {index < sponsors.length - 1 && (
                <Separator className="my-12 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Sponsors.displayName = 'Sponsors';

export default Sponsors;