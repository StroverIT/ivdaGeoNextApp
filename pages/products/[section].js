import React from "react";

// NextJs
import { useRouter } from "next/router";
import Image from "next/image";

export default function section() {
  const router = useRouter();
  const { section } = router.query;
  return (
    <main className="mb-auto">
      <div className="container md:grid grid-cols-[20%80%]">
        <aside className="hidden md:block"></aside>
        <section>
          <div className="md:hidden grid grid-cols-2 gap-2">
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
            <div className="grid grid-cols-[80%20%]">
              <div>
                <div className="flex relative h-full w-full">
                  <Image src="/images/testCarousel.jpg" layout="fill" />
                </div>
                <h2>АКУМУЛАТОРЕН КОМПЛЕКТ EINHELL TE-TK 12 Li</h2>
                <ul>
                  <li>ИНСТРУМЕНТ 1 : АКУМУЛАТОРНА БОРМАШИНА</li>
                  <li>ИНСТРУМЕНТ 2 : МУЛТИФУНКЦИОНАЛНО УСТРОЙСТВО</li>
                  <li>ИНСТРУМЕНТ 3 : АКУМУЛАТОРЕН ФЕНЕР</li>
                  <li>ТИП БАТЕРИЯ : Li-Ion</li>
                  <li>НАПРЕЖЕНИЕ : 12.00 V</li>
                </ul>
              </div>
              <div></div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
