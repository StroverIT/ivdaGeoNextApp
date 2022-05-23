import React from "react";

// NextJs
import { useRouter } from "next/router";
import Image from "next/image";
// Components
import Pricing from "../../components/priceStyling/Pricing";

export default function section() {
  const router = useRouter();
  const { section } = router.query;

  return (
    <main className="mb-auto">
      <div className="container lg:grid grid-cols-[20%80%] gap-4">
        <aside className="hidden lg:block bg-gray">
          <div className="container">
            <h3>Филтри</h3>
            <div>
              <h3>Цена</h3>
              <div>
                <span>169.99 лв.</span>
                <span>1 499.99 лв.</span>
              </div>
              {/* Pricing line to choose */}
              <div>
                <span>{/* Icon */}</span>
                <span>Изчисти</span>
              </div>
            </div>
            <div>
              <h3>Марка</h3>
              <div>
                <input type="checkbox" />
                <span>
                  BLACK&Decker <span>{/*quantity */}</span>
                </span>
              </div>
            </div>
            <div>
              <h3>Напрежение</h3>
              <div>
                <input type="checkbox" />
                <span>
                  10.80 V <span>{/*quantity */}</span>
                </span>
              </div>
            </div>
          </div>
        </aside>
        <section>
          <div className="lg:hidden grid grid-cols-2 gap-2">
            {/* TODO: add icons */}
            <button
              type="button"
              className="w-full h-full text-left text-white bg-primary pl-4 py-2"
            >
              Филтри
            </button>
            <button
              type="button"
              className="w-full h-full text-left border border-gray pl-4 py-2"
            >
              Сортирай по:
            </button>
          </div>
          <section>
            <div className="md:grid grid-cols-[80%20%]">
              <div className="md:flex">
                <div className="flex relative h-full w-full">
                  <Image src="/images/testCarousel.jpg" layout="fill" />
                </div>
                <div>
                  <h2>АКУМУЛАТОРЕН КОМПЛЕКТ EINHELL TE-TK 12 Li</h2>
                  <ul className="text-sm text-gray-darker">
                    <li>ИНСТРУМЕНТ 1 : АКУМУЛАТОРНА БОРМАШИНА</li>
                    <li>ИНСТРУМЕНТ 2 : МУЛТИФУНКЦИОНАЛНО УСТРОЙСТВО</li>
                    <li>ИНСТРУМЕНТ 3 : АКУМУЛАТОРЕН ФЕНЕР</li>
                    <li>ТИП БАТЕРИЯ : Li-Ion</li>
                    <li>НАПРЕЖЕНИЕ : 12.00 V</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray">
                <div className="container flex justify-center itesm-center h-full flex-col">
                  <div className="flex justify-center">
                    <Pricing price={169} priceDec={99} />
                  </div>
                  <div className="border-t border-white">
                    <button
                      type="button"
                      className="text-white bg-green w-full my-10 py-1 rounded-full"
                    >
                      Купи
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
