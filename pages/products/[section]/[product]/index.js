import React, { useRef, useState } from "react";

// Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// Styling
import style from "../../../../styles/products/showProduct.module.css";
// Components
import ThumbsGallery from "../../../../components/swiperJs/ThumbsGallery";
import Pricing from "../../../../components/priceStyling/Pricing";
import BuyBtn from "../../../../components/base/BuyBtn";

export default function index() {
  const qty = useRef(null);
  const [currQty, setQty] = useState(1);

  return (
    <main className="mb-auto">
      <div className="container">
        <div className="grid-cols-2 lg:grid xl:grid-cols-3">
          <ThumbsGallery />
          <section className="">
            <section className="flex items-center justify-between border-b border-gray">
              <div>Цена:</div>
              <div>
                <Pricing price={220} priceDec={22} />
              </div>
            </section>
            <section className="flex justify-between">
              <div className="flex items-center">
                <div>
                  <button
                    type="button"
                    className="p-1 text-sm text-white rounded-full bg-primary"
                    onClick={() => setQty(currQty + 1)}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <input
                  type="number"
                  className="w-1/3 mx-2 text-center border rounded-full border-primary"
                  value={currQty}
                  onChange={(e) => setQty(e.target.value)}
                  placeholder="Бройка"
                  ref={qty}
                />
                <div>
                  <button
                    type="button"
                    className="p-1 text-sm text-white rounded-full bg-primary"
                    onClick={() => setQty(currQty - 1)}
                  >
                    <AiOutlineMinus />
                  </button>
                </div>
              </div>
              <BuyBtn lg={true} />
            </section>
          </section>
          <section className="border-b border-gray">
            <h3 className="text-xl font-semibold">Кратко описание</h3>
            <ul className="text-[#3b3b3b] text-sm mt-1">
              <li>ИНСТРУМЕНТ 1: АКУМУЛАТОРНА БОРМАШИНА</li>
              <li>ИНСТРУМЕНТ 2: МУЛТИФУНКЦИОНАЛНО УСТРОЙСТВО</li>
              <li>ИНСТРУМЕНТ 3: АКУМУЛАТОРЕН ФЕНЕР</li>
              <li>ТИП БАТЕРИЯ: Li-Lon</li>
              <li>НАПРЕЖЕНИЕ: 12.00 V</li>
            </ul>
          </section>
        </div>
        <section>
          <h3 className="text-xl font-semibold text-center ">
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
