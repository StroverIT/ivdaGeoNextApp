import React from "react";

// Styles
import styles from "../../styles/products/listProducts.module.css";

// NextJs
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// Components
import Pricing from "../../components/priceStyling/Pricing";
import Checkbox from "../../components/base/Checkbox";

export default function section() {
  const router = useRouter();
  const { section } = router.query;

  return (
    <main className="mb-auto">
      <div className="lg:grid grid-cols-[20%80%] gap-4 container">
        <aside
          className={`hidden w-full h-full lg:block bg-[#f5f5f5] ${styles.asideContainer} relative `}
        >
          <div className="">
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
              <Checkbox text="BLACK&DECKER" id="blackAndDecker" quantity={2} />
            </div>
            <div>
              <h3>Напрежение</h3>
              <Checkbox text="10.80 V" id="10.80V" quantity={100} />
            </div>
          </div>
        </aside>
        <section>
          <div className="grid grid-cols-2 gap-2 lg:hidden">
            {/* TODO: add icons */}
            <button
              type="button"
              className="w-full h-full py-2 pl-4 text-left text-white bg-primary"
            >
              Филтри
            </button>
            <button
              type="button"
              className="w-full h-full py-2 pl-4 text-left border border-gray"
            >
              Сортирай по:
            </button>
          </div>
          <section className="flex items-center w-full h-full">
            <div className="md:grid grid-cols-[80%20%] w-full h-full">
              <div className="items-center justify-center sm:flex">
                <Link href={`/products${section}/someProduct`}>
                  <div className="relative flex w-full h-48 sm:w-52 sm:h-32">
                    <Image src="/images/testCarousel.jpg" layout="fill" />
                  </div>
                </Link>

                <div className="pl-4">
                  <h2>АКУМУЛАТОРЕН КОМПЛЕКТ EINHELL TE-TK 12 Li</h2>
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
                  <div className="border-t border-gray">
                    <button
                      type="button"
                      className="w-full py-1 my-10 text-white rounded-full bg-green lg:my-5"
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
