import { horses } from '@/data/horses';
import HorseCard from './HorseCard';

const HorseGrid = () => {
  console.log("Rendering HorseGrid component");
  
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {horses.map((horse) => (
          <HorseCard key={horse.id} {...horse} />
        ))}
      </div>
    </div>
  );
};

export default HorseGrid;