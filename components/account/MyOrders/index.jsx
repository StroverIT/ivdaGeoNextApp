import React from "react";
// Icons
import { AiOutlineSearch } from "react-icons/ai";
// Components
import Pricing from "../../priceStyling/Pricing";

export default function MyOrders() {
  return (
    <section className="">
      <h2 className="mb-2 text-3xl font-semibold text-center mt-5">
        Направените от вас поръчки
      </h2>
      {/* If no orders */}
      <div className="text-center text-secondary pb-10">
        Нямате направени поръчки
      </div>
      <table className="table-auto w-full my-table-spacing mt-10">
        <thead>
          <tr className="bg-primary text-white ">
            <th className="py-2">Поръчка</th>
            <th>Дата</th>
            <th>Общо</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-gray">
          <tr>
            {/* Mongodb */}
            <td className="py-4">ID на поръчката</td>
            <td>Дата на направената поръчка</td>
            <td>Обща сума (в лв.)</td>
            <td className="text-primary font-semibold">В прогрес</td>
            <td>
              <button className="text-primary-lighter  flex justify-center items-center rounded-full p-2 text-2xl font-semibold cursor-pointer">
                <AiOutlineSearch />
              </button>
            </td>
          </tr>
          <tr>
            {/* Mongodb */}
            <td className="py-4">ID на поръчката</td>
            <td>Дата на направената поръчка</td>
            <td>Обща сума (в лв.)</td>
            <td className="text-green font-semibold">Изпратена</td>
            <td>
              <button className="bg-primary-lighter text-white text-center rounded-md p-2 text-sm font-semibold tracking-wide cursor-pointer">
                ВИЖ
              </button>
            </td>
          </tr>
          <tr>
            {/* Mongodb */}
            <td className="py-4">ID на поръчката</td>
            <td>Дата на направената поръчка</td>
            <td>Обща сума (в лв.)</td>
            <td className="text-secondary font-semibold">Върната</td>
          </tr>
          <tr>
            {/* Mongodb */}
            <td className="py-4">752112</td>
            <td>12.05.1995</td>
            <td>
              <Pricing price={249} priceDec={22} />
            </td>
            <td className="text-secondary font-semibold">Върната</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
