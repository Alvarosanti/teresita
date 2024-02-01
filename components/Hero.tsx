"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const handleClickDownloadMenu = () => {
    fetch("Alvaro_Santisteban_Laura_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.target = "_blank";
        alink.href = fileUrl;
        // alink.download = 'Alvaro_Santisteban_Laura_Resume.pdf';
        alink.click();
      });
    });
  };

  return (
    <motion.section
      id="home"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
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
            <button
              onClick={handleClickDownloadMenu}
              className="bg-green-500 text-white px-8 py-3 text-lg rounded-full"
            >
              Descargar Carta
            </button>
            <Link
              href={"/menucard?categories=Todos"}
              className="bg-green-500 text-white px-8 py-3 text-lg rounded-full"
            >
              Pedir Online
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
