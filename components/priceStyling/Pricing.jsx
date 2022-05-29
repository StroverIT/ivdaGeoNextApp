import React from "react";

// based on this dictionary fix:
/*
1. Margin on pricedec
2. text-{somethin} on price
3. text-{something} on priceDec
*/
const sizeDictionary = {
  xl: ["text-xl", "text-sm"],
};
export default function Pricing({ price, priceDec, size }) {
  return (
    <div className="flex">
      <div className={`flex items-center px-2 py-2 } `}>
        <div className={` font-semibold ${sizeDictionary[size][0]}`}>
          {price}
        </div>
        <div
          className={`relative flex flex-col items-center h-full ${sizeDictionary[size][1]}`}
        >
          <div className="h-0 mt-1 font-semibold">{priceDec}</div>
          <div className="h-0 mt-[8.8px]">лв.</div>
        </div>
      </div>
    </div>
  );
}
