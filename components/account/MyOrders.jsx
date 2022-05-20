import React from "react";

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
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Mongodb */}
            <td>ID на поръчката</td>
            <td>Дата на направената поръчка</td>
            <td>Обща сума (в лв.)</td>
            <td className="text-primary font-semibold">В прогрес</td>
          </tr>
          <tr>
            {/* Mongodb */}
            <td>ID на поръчката</td>
            <td>Дата на направената поръчка</td>
            <td>Обща сума (в лв.)</td>
            <td className="text-green font-semibold">Изпратена</td>
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
            <td>295 лв.</td>
            <td className="text-secondary font-semibold">Върната</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
