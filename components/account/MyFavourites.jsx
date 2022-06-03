import React from "react";

// Icons
import { BsTrash } from "react-icons/bs";
// Styles
import style from "../../styles/account/myFavourites.module.css";

// NextJs
import Image from "next/image";
// Components
import Pricing from "../priceStyling/Pricing";

function Card() {
  return (
    <div className="w-full">
      <div className="relative w-full h-48">
        <Image src="/images/testImage2.png" layout="fill" objectFit="contain" />
        <div className="absolute right-0 top-3 cursor-pointer text-dark bg-white rounded-full p-2 text-xl border border-gray-200 hover:scale-105 hover:text-primary transition-all">
          <BsTrash />
        </div>
      </div>
      <div>
        <h5 className="font-semibold text-sm">
          АКУМУЛАТОРЕН КОМПЛЕКТ EINHELL TE-TK 12 Li
        </h5>
      </div>
      <div className="pb-2 pt-1">
        <Pricing price={20} priceDec={10} size="sm" />
      </div>
      <div>
        <button
          type="button"
          className="bg-primary text-white py-2 w-full text-xs font-semibold"
        >
          ДОБАВИ В КОЛИЧКА
        </button>
      </div>
    </div>
  );
}
export default function MyFavourites() {
  return (
    <section className="pb-2">
      <h2 className="mb-2 text-3xl font-semibold text-center mt-5">
        Любими продукти
      </h2>
      <div className="text-center text-secondary pb-10">
        Нямате сложени любими продукти
      </div>
      <section
        className={` flex-wrap gap-5 justify-center grid ${style.itemsContainer}`}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
}
