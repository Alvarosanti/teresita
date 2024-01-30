import React from "react";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center bg-black"
      style={{
        backgroundImage: 'url("/bg2.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="text-center text-white p-8 rounded-lg relative z-10">
        <h1 className="text-4xl font-bold mb-4">Teresita</h1>
        <p className="text-lg mb-6">
          Descripción emocionante de tu producto o servicio.
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <button className="bg-green-500 text-white px-8 py-3 text-lg rounded-full">
           Descargar Carta
          </button>
          <button className="bg-green-500 text-white px-8 py-3 text-lg rounded-full">
            Pedir Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
