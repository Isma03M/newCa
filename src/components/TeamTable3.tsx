const TeamTable3 = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-[#C5B358] mb-2">Nombre</h1>
          <h2 className="text-xl font-serif text-black">Jefe de novios y subgerente
          </h2>
        </div>
        
        {/* Separator */}
        <div className="w-24 h-0.5 bg-[#C5B358] mx-auto mb-12"></div>

        {/* Image Section */}
        <div className="mb-12">
          <img
            src="/Img/jinetesubget.jpg"
            alt="nombre de la imagen"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Content Text */}
        <div className="max-w-4xl mx-auto">
          <p className="text-black text-lg leading-relaxed text-center">
Historia de la subgrente o sub          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamTable3;