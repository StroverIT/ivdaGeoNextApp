// NextJs
import Head from "next/head";
import Image from "next/image";
// Icons
import { HiX } from "react-icons/hi";
// Components
import Price from "../components/priceStyling/Pricing";
import QunityInput from "../components/base/QuanityInput";

function TableData({ children, classes }) {
  return (
    <td className={`w-full lg:w-auto ${classes ? classes : ""}`}>{children}</td>
  );
}
// import styles from '../styles/Home.module.css'
export default function Cart() {
  return (
    <>
      <Head>
        <title>IvdaGeo</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>

      <main className="mb-auto ">
        <div className="container">
          <h3 className="text-3xl font-semibold uppercase">Твоята количка</h3>
          <div className="xl:grid grid-cols-[70%30%] xl:space-x-4">
            <table className="w-full table-auto">
              <thead className="bg-gray-100 text-gray-250">
                <tr className="hidden xl:table-row">
                  <th colSpan="2">Продукт</th>
                  <th colSpan="1">Цена</th>
                  <th colSpan="1">Количество</th>
                  <th colSpan="1">Общо</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-[#e4e7e6] flex flex-wrap xl:table-row justify-between items-center ">
                  <TableData>
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="relative w-full h-40 sm:w-2/3 sm:h-60 lg:h-32 lg:w-40 ">
                        <Image layout="fill" src="/images/testCarousel.jpg" />
                      </div>
                    </div>
                  </TableData>
                  <TableData>
                    <h3 className="">
                      АКУМУЛАТОРЕН КОМПЛЕКТ EINHELL TE-TK 12 Li
                    </h3>
                    <ul className="mt-2 text-xs text-gray-250">
                      <li className="pb-1">
                        ИНСТРУМЕНТ 1 : АКУМУЛАТОРНА БОРМАШИНА
                      </li>
                      <li className="pb-1">
                        ИНСТРУМЕНТ 2 : МУЛТИФУНКЦИОНАЛНО УСТРОЙСТВО
                      </li>
                      <li className="pb-1">
                        ИНСТРУМЕНТ 3 : АКУМУЛАТОРЕН ФЕНЕР ТИП БАТЕРИЯ : Li-Ion
                      </li>
                      <li className="pb-1">НАПРЕЖЕНИЕ : 12.00 V</li>
                    </ul>
                  </TableData>
                  <TableData>
                    <Price priceDec={20} price={100} size="2xl" />
                  </TableData>
                  <TableData>
                    <QunityInput contClass="w-1/2 mx-auto mt-2 lg:mt-10" />
                    <div className="flex items-center justify-center mt-2">
                      <button
                        type="button"
                        className="flex items-center justify-center cursor-pointer text-gray-darker"
                      >
                        <div className="mt-[0.25px]">
                          <HiX />
                        </div>
                        <div>Премахни</div>
                      </button>
                    </div>
                  </TableData>
                  <TableData classes="hidden xl:table-cell">
                    <Price priceDec={48} price={200} size="2xl" />
                  </TableData>
                </tr>
              </tbody>
            </table>
            <aside className="border-[10px] border-gray-100 p-5">
              <section className="flex items-center justify-between border-b b-[#e4e7e6]">
                <div className="font-semibold uppercase ">Междинна сума:</div>
                <div>
                  <Price size="2xl" price={200} priceDec={20} />
                </div>
              </section>
              <section className="flex items-center justify-between border-b b-[#e4e7e6]">
                <div className="font-semibold uppercase ">Доставка:</div>
                <div>Добави информация</div>
              </section>
              <section className="flex items-center justify-between border-b b-[#e4e7e6]">
                <div className="font-semibold uppercase ">Обща цена:</div>
                <div>
                  <Price size="3xl" price={200} priceDec={20} />
                </div>
              </section>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="w-full py-2 font-medium text-white uppercase transition-colors duration-300 border px-14 bg-primary hover:bg-transparent hover:text-primary border-primary"
                >
                  Завърши
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
