import React from "react";

// NextJs
import Image from "next/image";
import Link from "next/link";
//Components
import Pricing from "../../priceStyling/Pricing";
import BuyBtn from "../../base/BuyBtn";

export default function Product({ section }) {
  return (
    <section className="flex items-center mb-5 border border-gray">
      <div className="md:grid grid-cols-[80%20%] w-full h-full">
        <div className="items-center h-full py-3 sm:flex">
          <Link href={`/products/${section}/someProduct`}>
            <div className="relative flex w-full h-48 cursor-pointer sm:w-52 sm:h-32">
              <Image src="/images/testCarousel.jpg" layout="fill" />
            </div>
          </Link>

          <div className="pl-4">
            <Link href={`/products/${section}/someProduct`}>
              <h2 className="text-lg cursor-pointer">
                АКУМУЛАТОРЕН КОМПЛЕКТ EINHELL TE-TK 12 Li
              </h2>
            </Link>
            <ul className="pt-2 text-sm text-gray-darker">
              <li>ИНСТРУМЕНТ 1 : АКУМУЛАТОРНА БОРМАШИНА</li>
              <li>ИНСТРУМЕНТ 2 : МУЛТИФУНКЦИОНАЛНО УСТРОЙСТВО</li>
              <li>ИНСТРУМЕНТ 3 : АКУМУЛАТОРЕН ФЕНЕР</li>
              <li>ТИП БАТЕРИЯ : Li-Ion</li>
              <li>НАПРЕЖЕНИЕ : 12.00 V</li>
            </ul>
          </div>
        </div>
        <div className="bg-grayBg">
          <div className="container flex flex-col justify-center h-full itesm-center">
            <div className="flex justify-center">
              <Pricing price={169} priceDec={99} size="text-2xl" />
            </div>
            {/* Create grayer color for future*/}
            <BuyBtn border={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
