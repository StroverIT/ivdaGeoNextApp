import React from "react";
// Icons
import { AiOutlineSearch } from "react-icons/ai";
// Components
import Pricing from "../../priceStyling/Pricing";

function StatusProgress() {
  return <td className="font-semibold text-primary">В прогрес</td>;
}
function StatusSent() {
  return <td className="font-semibold text-green">Изпратена</td>;
}
function StatusRet() {
  return <td className="font-semibold text-secondary">Върната</td>;
}
function TableRow({ id, date, total, status, isOld }) {
  const statusDic = {
    progress: <StatusProgress />,
    sent: <StatusSent />,
    returned: <StatusRet />,
  };
  return (
    <tr>
      {/* Mongodb */}
      <td className="py-4">{id}</td>
      <td className="hidden sm:table-cell">{date}</td>
      <td className="hidden sm:table-cell">{total} (в лв.)</td>
      {statusDic[status]}
      {isOld && (
        <td className="flex justify-center h-full items-cemter">
          <button className="flex items-center justify-center h-full p-4 text-2xl font-semibold rounded-full cursor-pointer text-primary-lighter">
            <AiOutlineSearch />
          </button>
        </td>
      )}
      {!isOld && (
        <td>
          <button className="p-2 text-sm font-semibold tracking-wide text-center text-white rounded-md cursor-pointer bg-primary-lighter">
            ВИЖ
          </button>
        </td>
      )}
    </tr>
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
