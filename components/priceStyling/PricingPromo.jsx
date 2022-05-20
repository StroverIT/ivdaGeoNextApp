// React
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
// Next
import Link from "next/link";

const Pricing = ({ isPromo, price, priceDec, pageUrl }) => {
  return (
    <div className="flex mt-auto border-t border-gray">
      <Link href={pageUrl}>
        <div className="flex items-center justify-center cursor-pointer ml-7">
          <AiOutlineSearch />
          <span className="ml-1 text-sm">Виж</span>
        </div>
      </Link>
      <div
        className={`h-full flex items-center px-2 py-2 ml-auto text-white ${
          !isPromo ? "bg-primary" : " bg-secondary"
        }`}
      >
        <div className="text-2xl font-semibold">{price}</div>
        <div className="relative flex flex-col items-center h-full text-sm">
          <div className="h-0 mt-1 font-semibold">{priceDec}</div>
          <div className="h-0 mt-[8.8px]">лв.</div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
