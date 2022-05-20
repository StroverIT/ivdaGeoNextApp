import React from "react";

import Input from "../../components/form/AccInput";

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
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
