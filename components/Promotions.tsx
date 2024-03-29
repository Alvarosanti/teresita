"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { promotions } from "@/constants/products";
const Promotions = () => {
  return (
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
      <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
        <h2 className="bold-40 lg:bold-64 pb-16">Promociones</h2>
        <div className="mx-auto max-w-[1000px] padding-container relative w-auto flex justify-end">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {promotions.map((product) => (
              <Link href={`/menucard/promotion/${product.id}`} key={product.id}>
                <div key={product.id}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="rounded-md shadow-sm aspect-[4/5] object-cover object-top"
                  />
                  <div className="space-y-1">
                    <div>
                      <p className="mt-4 font-medium truncate">
                        {product.title}
                      </p>
                    </div>
                    <p className="line-clamp-2 text-slate-500 text-sm">
                      {product.desc}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">S/.{product.price}</p>
                      {/* <p className="flex gap-2 items-center mt-2">
                <StarIcon className="w-5 -mt-.5 text-yellow-500" />
                <span>4.2</span>
              </p> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Promotions;
