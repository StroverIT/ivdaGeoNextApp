import React from "react";
// Icons
import { AiOutlineSearch } from "react-icons/ai";
// Components
import Pricing from "../priceStyling/Pricing";

export default function MyOrders() {
  return (
    <section className="">
      <h2 className="mb-5 text-3xl font-semibold text-center">
        Направените от вас поръчки
      </h2>
      {/* If no orders */}
      <div className="text-center pb-10 text-secondary">
        Нямате направени поръчки
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Поръчка</th>
            <th>Дата</th>
            <th>Общо</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Mongodb */}
            <td>ID на поръчката</td>
            <td>Дата на направената поръчка</td>
            <td>Обща сума (в лв.)</td>
            <td className="text-primary font-semibold">В прогрес</td>
            <td className="text-primary-lighter  flex justify-center items-center rounded-full p-2 text-2xl font-semibold">
              <AiOutlineSearch />
            </td>
          </tr>
          <tr>
            {/* Mongodb */}
            <td>ID на поръчката</td>
            <td>Дата на направената поръчка</td>
            <td>Обща сума (в лв.)</td>
            <td className="text-green font-semibold">Изпратена</td>
            <td className="bg-primary-lighter text-white text-center rounded-full p-2 text-sm font-semibold tracking-widest">
              ВИЖ
            </td>
          </tr>
          <tr>
            {/* Mongodb */}
            <td>ID на поръчката</td>
            <td>Дата на направената поръчка</td>
            <td>Обща сума (в лв.)</td>
            <td className="text-secondary font-semibold">Върната</td>
          </tr>
          <tr>
            {/* Mongodb */}
            <td>1141512312</td>
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
