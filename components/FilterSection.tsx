import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "@/constants/products";
import { useSearchParams } from "next/navigation";

const categories = [
  "Todos",
  "Parrillas",
  "Carnes",
  "Mixtos",
  "Panes",
  "Tomahawks",
  "Guarniciones",
  "Bebidas",
];

const FilterSection = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("categories");

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      {/* Filtros por categoría */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8 justify-center">
        {categories.map((category) => (
          <Link
            href={`?categories=${category}`}
            key={category}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-20">
          {filteredProducts.map((product) => (
            <Link href={`/menucard/detail/${product.id}`} key={product.id}>
              <div key={product.id}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={350}
                  height={400}
                  className="rounded-md shadow-sm aspect-[4/5] object-cover object-top"
                />
                <div className="space-y-1">
                  <div>
                    <p className="mt-4 font-medium truncate">{product.title}</p>
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
    </div>
  );
};

export default FilterSection;
