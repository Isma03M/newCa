const TeamTable4 = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section - Centered at top */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-[#C5B358] mb-2">NOMBRE DE LA PERSONA</h1>
          <h2 className="text-xl font-serif text-black">PUESTO DE LA PERSONA</h2>
          
          {/* Separator */}
          <div className="w-24 h-0.5 bg-[#C5B358] mx-auto mt-8"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Image */}
          <div>
            <img
              src="/Img/jinetesubget.jpg"
              alt="nombre"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <p className="text-black text-lg leading-relaxed">
Historia de la persona            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTable4;