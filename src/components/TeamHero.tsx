const TeamHero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://vet.tufts.edu/sites/g/files/lrezom951/files/styles/large/public/2023-01/iStock-1086631812.jpg?itok=74lyCyA1')",
          filter: "brightness(0.6)"
        }}
      ></div>
      <div className="relative z-10 ml-20">
        <h1 className="text-7xl font-serif text-white mb-6">TEAM</h1>
        <div className="flex justify-left mb-12">
          <img
            src="/Img/divisor.jpg"
            alt="Divisor decorativo"
            className="h-8"
            loading="lazy"
          />
        </div>        <p className="text-xl text-white max-w-2xl font-serif tracking-wider">
        Technique, compassion, and a relentless drive for excellence.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;
