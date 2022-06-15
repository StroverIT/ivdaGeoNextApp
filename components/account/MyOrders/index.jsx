import React, { useState } from "react";
// Icons
import { AiOutlineSearch } from "react-icons/ai";
// Components
import Pricing from "../../priceStyling/Pricing";

function Status({ type, isDiv }) {
  let color = {
    type: "",
    text: "",
  };
  switch (type) {
    case "progress":
      color.type = "text-primary";
      color.text = "В прогрес";
      break;
    case "sent":
      color.type = "text-green";
      color.text = "Изпратена";
      break;
    case "returned":
      color.type = "text-secondary";
      color.text = "Върната";
  }
  return (
    <>
      {!isDiv && (
        <td className={`font-semibold ${color.type}`}>{color.text}</td>
      )}
      {isDiv && (
        <div className={`font-semibold ${color.type}`}>{color.text}</div>
      )}
    </>
  );
}

function TableRow({ id, date, total, status, isOld }) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <tr>
        {/* Mongodb */}
        <td className="py-4">{id}</td>
        <td className="hidden sm:table-cell">{date}</td>
        <td className="hidden sm:table-cell">{total} лв.</td>
        <Status type={status} />
        {isOld && (
          <td className="flex justify-center h-full items-cemter">
            <button className="flex items-center justify-center h-full p-4 text-2xl font-semibold rounded-full cursor-pointer text-primary-lighter">
              <AiOutlineSearch />
            </button>
          </td>
        )}
        {!isOld && (
          <td>
            <button
              className="p-2 text-sm font-semibold tracking-wide text-center text-white rounded-md cursor-pointer bg-primary-lighter"
              onClick={() => setMenu(true)}
            >
              ВИЖ
            </button>
          </td>
        )}
        <td>
          <div
            className={`${
              !menu && "hidden"
            } fixed  z-20 left-0 top-0 h-screen w-screen`}
          >
            <div
              className="blury-noProps relative h-screen w-full cursor-pointer z-10"
              onClick={() => setMenu(false)}
            >
              {/* Mongodb */}
            </div>
            <section className="bg-primary w-full   absolute top-1/2 z-20 ">
              <div className="container py-5 ">
                <div className="flex space-x-5 flex-wrap">
                  <div className="">{id}</div>
                  <div className="">{date}</div>
                  <div className="">{total} лв.</div>
                </div>
                <Status type={status} isDiv={true} />
              </div>
            </section>
          </div>
        </td>
      </tr>
    </>
  );
}
export default function MyOrders() {
  return (
    <section className="">
      <h2 className="mt-5 mb-2 text-3xl font-semibold text-center">
        Направените от вас поръчки
      </h2>
      {/* If no orders */}
      <div className="pb-10 text-center text-secondary">
        Нямате направени поръчки
      </div>
      <table className="w-full mt-10 table-auto my-table-spacing">
        <thead>
          <tr className="text-center text-white bg-primary">
            <th className="py-2">Поръчка</th>
            <th className="hidden sm:table-cell">Дата</th>
            <th className="hidden sm:table-cell">Общо</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center divide-y-2 divide-gray">
          <TableRow
            id="#12312541"
            date="12.02.2022"
            total={12.22}
            status="progress"
            isOld={true}
          />
          <TableRow
            id="#12312541"
            date="12.02.2022"
            total={12.22}
            status="sent"
          />
          <TableRow
            id="#12312541"
            date="12.02.2022"
            total={12.22}
            status="returned"
          />
        </tbody>
      </table>
    </section>
  );
}
