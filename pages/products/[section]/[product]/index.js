import React, { useRef, useState } from "react";

// Icons
import { AiOutlineHeart } from "react-icons/ai";
// Styling
import style from "../../../../styles/products/showProduct.module.css";
// Components
import ThumbsGallery from "../../../../components/swiperJs/ThumbsGallery";
import Pricing from "../../../../components/priceStyling/Pricing";
import QuanityInput from "../../../../components/base/QuanityInput";

export default function index() {
  return (
    <main className="mb-auto">
      <div className="container">
        <div className="flex flex-col justify-between py-5 my-5 border-b md:flex-row border-gray-bord">
          <h3 className="text-2xl font-semibold">
            АКУМУЛАТОРЕН КОМПЛЕКТ EINHELL TE-TK 12 Li
          </h3>
          <div className="mt-5 md:mt-1">
            <ul className="text-sm text-right text-gray-250">
              <li>Код: 23141412</li>
              <li>EAN: 40015125122</li>
            </ul>
          </div>
        </div>
        <div className="grid-cols-2 lg:grid xl:grid-cols-[40%30%30%] auto-cols-max">
          <ThumbsGallery navSize="2xl" />
          <section className="p-4 bg-gray-400 xl:order-2">
            <section className="flex items-center justify-between border-b border-gray-bord ">
              <div>Цена:</div>
              <div>
                <Pricing price={220} priceDec={22} size="3xl" />
              </div>
            </section>
            <section className="my-5 ">
              <div className="">
                <div className="mb-1">
                  <label htmlFor="qty" className="text-sm font-semibold ">
                    Бройки:
                  </label>
                </div>
                <div className="grid grid-cols-[30%70%]">
                  <QuanityInput />
                  <button
                    type="button"
                    className={`w-full px-2 flex py-2  justify-center items-end font-semibold text-white  bg-primary text-sm ml-3`}
                  >
                    Купи
                  </button>
                  <div className="flex items-center justify-center col-span-2 mt-6 cursor-pointer group ">
                    <div className="inline-flex p-2 text-xl rounded-full bg-gray group-hover:bg-gray-200 group-hover:text-white md:ml-5">
                      <AiOutlineHeart />
                    </div>
                    <span className="ml-1 text-sm group-hover:font-medium">
                      Добави в любими
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className="p-4 mt-4 bg-gray-300 xl:order-1 md:col-span-2 xl:col-span-1 md:mt-0">
            <h3 className="text-xl font-semibold">Кратко описание</h3>
            <ul className="text-[#3b3b3b] text-sm mt-1  pb-4">
              <li>ИНСТРУМЕНТ 1: АКУМУЛАТОРНА БОРМАШИНА</li>
              <li>ИНСТРУМЕНТ 2: МУЛТИФУНКЦИОНАЛНО УСТРОЙСТВО</li>
              <li>ИНСТРУМЕНТ 3: АКУМУЛАТОРЕН ФЕНЕР</li>
              <li>ТИП БАТЕРИЯ: Li-Lon</li>
              <li>НАПРЕЖЕНИЕ: 12.00 V</li>
            </ul>
          </section>
        </div>
        <section className="my-16">
          <h3 className="py-5 text-xl font-semibold text-center">
            ВСИЧКИ ХАРАКТЕРИСТИКИ
          </h3>
          <table className={`table-fixed  ${style.table} w-full`}>
            <tbody className="even:bg-dark">
              <tr>
                <td>МАРКА</td>
                <td>EINHELL</td>
              </tr>
              <tr>
                <td>МОДЕЛ</td>
                <td>TE-TK 12 Li</td>
              </tr>
              <tr>
                <td>ИНСТРУМЕНТ 1</td>
                <td>АКУМУЛАТОРНА БОРМАШИНА</td>
              </tr>
              <tr>
                <td>ИНСТРУМЕНТ 2</td>
                <td>МУЛТИФУНКЦИОНАЛНО УСТРОЙСТВО</td>
              </tr>
              <tr>
                <td>ИНСТРУМЕНТ 3</td>
                <td>АКУМУЛАТОРЕН ФЕНЕР</td>
              </tr>
              <tr>
                <td>ТИП БАТЕРИЯ</td>
                <td>Li-Ion</td>
              </tr>
              <tr>
                <td>НАПРЕЖЕНИЕ</td>
                <td>12.00 V</td>
              </tr>
              <tr>
                <td>БРОЙ БАТЕРИИ</td>
                <td>2</td>
              </tr>
              <tr>
                <td>КАПАЦИТЕТ НА БАТЕРИЯТА</td>
                <td>1.30 Ah</td>
              </tr>
              <tr>
                <td>КАПАЦИТЕТ НА БАТЕРИЯТА 2</td>
                <td>1.30 Ah</td>
              </tr>
              <tr>
                <td>ВРЕМЕ ЗА ЗАРЕЖДАНЕ</td>
                <td>3 H</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
