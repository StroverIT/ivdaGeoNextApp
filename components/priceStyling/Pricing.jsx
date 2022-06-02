import React from "react";

// based on this dictionary fix:
/*
1. Margin on pricedec
2. text-{somethin} on price
3. text-{something} on priceDec
*/
const sizeDictionary = {
  sm: ["text-xl", "text-[11px]", "mt-[7px]"],
  xl: ["text-xl", "text-xs", "mt-[9px]"],
  "2xl": ["text-2xl", "text-sm", "mt-[9px]"],
  "3xl": ["text-3xl", "text-sm", "mt-[11px]"],
};
export default function Pricing({ price, priceDec, size }) {
  return (
    <div className="flex justify-center">
      <div className={`flex items-center px-2  } `}>
        <div className={`font-semibold ${sizeDictionary[size][0]}`}>
          {price}
        </div>
        <div
          className={`relative flex flex-col items-center h-full ${sizeDictionary[size][1]} `}
        >
          <div className="h-0 mt-1 font-semibold">{priceDec}</div>
          <div className={`h-0 ${sizeDictionary[size][2]}`}>лв.</div>
        </div>
      </div>
    </div>
  );
}
