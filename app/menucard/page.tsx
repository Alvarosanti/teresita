"use client";
import Arrowback from "@/components/Arrowback";
import Banner from "@/components/Banner";
import FilterSection from "@/components/FilterSection";
import React, { useState } from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="pt-24">
      <Banner />
      <section className="container mx-auto md:p-80 md:py-20">
        <Arrowback link="/" />
        <motion.section
          id="promotions"
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
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6">
              Lista de Productos
            </h2>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg mb-6">
              Explora nuestra increíble selección de productos.
            </p>
          </div>
          <FilterSection />
        </motion.section>
      </section>
    </div>
  );
};

export default page;
