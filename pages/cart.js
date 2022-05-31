// NextJs
import Head from "next/head";
import Image from "next/image";
// Icons
import { HiX } from "react-icons/hi";
// Components
import Price from "../components/priceStyling/Pricing";
import QunityInput from "../components/base/QuanityInput";

function TableData({ children }) {
  return (
    <td className="" colSpan="1">
      {children}
    </td>
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

      <main className=" mb-auto">
        <div className="container">
          <h3 className="text-3xl uppercase font-semibold">Твоята количка</h3>
          <div>
            <table className="table-fixed w-full">
              <thead>
                <tr>
                  <th colSpan="2">Продукт</th>
                  <th colSpan="1">Цена</th>
                  <th colSpan="1">Количество</th>
                  <th colSpan="1">Общо</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <TableData>
                    <div className="relative h-10 w-10 ">
                      <Image layout="fill" src="/images/testCarousel.jpg" />
                    </div>
                  </TableData>
                  <TableData>
                    <h3 className="text-lg">
                      АКУМУЛАТОРЕН КОМПЛЕКТ EINHELL TE-TK 12 Li
                    </h3>
                    <ul className="text-sm text-gray-darker">
                      <li>ИНСТРУМЕНТ 1 : АКУМУЛАТОРНА БОРМАШИНА</li>
                      <li>ИНСТРУМЕНТ 2 : МУЛТИФУНКЦИОНАЛНО УСТРОЙСТВО</li>
                      <li>
                        ИНСТРУМЕНТ 3 : АКУМУЛАТОРЕН ФЕНЕР ТИП БАТЕРИЯ : Li-Ion
                      </li>
                      <li>НАПРЕЖЕНИЕ : 12.00 V</li>
                    </ul>
                  </TableData>
                  <TableData>
                    <Price priceDec={20} price={100} size="2xl" />
                  </TableData>
                  <TableData>
                    <QunityInput />
                    <div className="flex justify-center items-center">
                      <button
                        type="button"
                        className="flex justify-center items-center text-gray-darker cursor-pointer"
                      >
                        <div className="mt-[0.25px]">
                          <HiX />
                        </div>
                        <div>Премахни</div>
                      </button>
                    </div>
                  </TableData>
                  <TableData>
                    <Price priceDec={48} price={200} size="2xl" />
                  </TableData>
                </tr>
              </tbody>
            </table>
            <aside></aside>
          </div>
        </div>
      </main>
    </>
  );
}
