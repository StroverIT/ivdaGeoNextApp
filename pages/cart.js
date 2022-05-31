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
    <td className="w-auto" colSpan="1">
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

      <main className="mb-auto ">
        <div className="container">
          <h3 className="text-3xl font-semibold uppercase">Твоята количка</h3>
          <div>
            <table className="w-full table-auto">
              <thead className="bg-gray-100 text-gray-250">
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
                    <div className="relative w-10 h-10 ">
                      <Image layout="fill" src="/images/testCarousel.jpg" />
                    </div>
                  </TableData>
                  <TableData>
                    <h3 className="text-lg">
                      АКУМУЛАТОРЕН КОМПЛЕКТ EINHELL TE-TK 12 Li
                    </h3>
                    <ul className="mt-2 text-sm text-gray-250">
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
                    <QunityInput contClass="w-1/3 mx-auto mt-10" />
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
