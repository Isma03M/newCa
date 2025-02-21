
import { useState } from "react";

const TeamTable = () => {
  const [selectedOption, setSelectedOption] = useState("experiencia");

  const getContent = () => {
    switch (selectedOption) {
      case "experiencia":
        return {
          text: "Con más de dos décadas de experiencia en entrenamiento ecuestre,ha desarrollado una comprensión integral del comportamiento y desarrollo de los caballos. Su trayectoria incluye un trabajo extenso con diversas razas y disciplinas, lo que hace que su enfoque sea tanto versátil como efectivo."
        };
      case "filosofía":
        return {
          text: "La filosofía de entrenamiento  consiste en equilibrar un cuerpo sano con una mente positivamente estimulada para asegurar una transformación constante. Desde el trabajo en línea hasta las caminatas, su énfasis en la diversidad dentro de un programa de ejercicios y métodos de entrenamiento basados en recompensas crea un atleta emocionalmente sólido, feliz y equilibrado."
        };
      case "metas":
        return {
          text: "Nuestro objetivo principal es desarrollar atletas ecuestres completos, manteniendo su bienestar físico y emocional. Nos esforzamos por crear fuertes asociaciones entre caballos y jinetes, enfocándonos en una comunicación clara y el respeto mutuo."
        };
      default:
        return { text: "" };
    }
  };

  const content = getContent();

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left side - Options */}
          <div className="flex flex-col justify-center space-y-4">
            {["experiencia", "filosofía", "metas"].map((option) => (
              <button
                key={option}
                onClick={() => setSelectedOption(option)}
                className={`text-left subtitle w-full transition-colors ${
                  selectedOption === option
                    ? "text-[#C5B358]"
                    : "text-black hover:text-[#C5B358]"
                }`}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Middle - Content */}
          <div className="space-y-6">
            <div className="mb-8">
              <h1 className="heading-primary text-[#C5B358] mb-2">NOMBRE DUEÑO</h1>
              <h2 className="heading-secondary text-black">DUEÑO</h2>
            </div>
            <div className="w-24 h-0.5 bg-[#C5B358]"></div>
            <p className="body-text text-black leading-relaxed">
              {content.text}
            </p>
          </div>

          {/* Right side - Image */}
          <div>
            <img
              src="/Img/jineteP.jpg"
              alt="Wynne Fassari"
              className="w-full max-w-[300px] h-[450px] object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTable;
