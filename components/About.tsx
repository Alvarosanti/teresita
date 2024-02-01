import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="container mx-auto max-w-[1000px] py-20 flex flex-col md:flex-row items-center px-4">
      <div className="w-full md:w-1/2 md:pr-10 mx-6 md:mx-0">
        <h2 className="text-4xl font-bold mb-4">
          Historia de Teresita
        </h2>
        <p className="text-gray-700 mb-6 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Leer más
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/bg2.jpg"
          alt="About Us"
          className="w-full h-auto rounded"
          width={2120}
          height={2120}
        />
      </div>
    </section>
  );
};

export default About;
