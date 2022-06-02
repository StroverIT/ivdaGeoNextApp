import React from "react";

// NextJs
import Image from "next/image";
// Components
import Pricing from "../priceStyling/Pricing";

export default function MyFavourites() {
  return (
    <section>
      <h2 className="mb-2 text-3xl font-semibold text-center mt-5">
        Любими продукти
      </h2>
      <div className="text-center text-secondary pb-10">
        Не сте сложили любими продукти
      </div>
      <section className="flex">
        <div>
          <div className="relative w-56 h-48">
            <Image src="/images/testCarousel.jpg" layout="fill" />
          </div>
          <div>
            <h5 className="font-semibold text-sm">
              АКУМУЛАТОРЕН КОМПЛЕКТ EINHELL TE-TK 12 Li
            </h5>
          </div>
          <Pricing price={20} priceDec={10} size="sm" />
          <div>
            <button
              type="button"
              class="bg-primary text-white py-2 w-full text-xs font-semibold"
            >
              ДОБАВИ В КОЛИЧКА
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
