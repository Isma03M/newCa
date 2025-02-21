
import { Link } from "react-router-dom";

interface HorseCardProps {
  id: string;
  name: string;
  year: string;
  height: string;
  color: string;
  type: string;
  breeding: string;
  level: string;
  image: string;
}

const HorseCard = ({ id, name, year, height, color, type, breeding, level, image }: HorseCardProps) => {
  console.log(`Rendering HorseCard for ${name}`);
  
  return (
    <div className="overflow-hidden border border-gray-200">
      <div className="relative">
        {/* Sección azul con imagen */}
        <div className="bg-[#001233] pb-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6 text-white">
            <h3 className="heading-secondary mb-2">{name}</h3>
            <p className="subtitle mb-2">
              {year} {height} {color} {type}
            </p>
            <p className="body-text italic">{breeding}</p>
          </div>
        </div>
        
        {/* Sección blanca con nivel y botón */}
        <div className="bg-white p-6">
          <div className="text-center mb-4">
            <p className="subtitle mb-1">LEVEL</p>
            <p className="category-name">{level}</p>
          </div>
          
          <Link 
            to={`/sales/${id}`}
            className="block w-full bg-gray-200 text-center py-3 text-sm hover:bg-gray-300 transition-colors body-text"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorseCard;
