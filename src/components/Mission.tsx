import { memo } from 'react';

const Mission = memo(() => {
  console.log("Rendering Mission component"); // Log para debugging

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-serif mb-12">Our Mission
        </h2>
        <div className="flex justify-center mb-12">
          <img
            src="/Img/divisor.png"
            alt="Divisor decorativo"
            className="h-8"
            loading="lazy"
          />
        </div>
        <p className="text-xl mb-8 uppercase tracking-wide">
        EC Dressage is committed to helping every rider find their perfect Lusitano—one with elite genetics, expert training, and the promise of success in every ride.
        </p>
        <div className="flex justify-center mb-12">
          <img
            src="/Img/divisor.png"
            alt="Divisor decorativo"
            className="h-8"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <p className="text-lg">
            Health Above All – Ensuring the Well-being, Strength, and Longevity of Every Lusitano.
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg">
            Tailored training programs designed for each horse to enhance their natural abilities, develop strength, and achieve peak performance.
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg">
            Committed to supporting dressage competition at FEI and CDI levels with top tier competitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

Mission.displayName = 'Mission';

export default Mission;