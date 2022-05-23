import React from "react";

const sizeDictionary = {
  xl: ["text-xl", "text-sm"],
};
export default function Pricing({ price, priceDec, size }) {
  return (
    <div className="flex">
      <div className={`flex items-center px-2 py-2 ${size} `}>
        <div className={` font-semibold ${size}`}>{price}</div>
        <div className="relative flex flex-col items-center h-full text-xs">
          <div className="h-0 mt-1 font-semibold">{priceDec}</div>
          <div className="h-0 mt-[8.8px]">лв.</div>
        </div>
      </div>
    </div>
  );
}
