import React from "react";

// based on this dictionary fix:
/*
1. Margin on pricedec
2. text-{somethin} on price
3. text-{something} on priceDec
*/
const sizeDictionary = {
  sm: ["text-xl", "text-[11px]", "mt-[2px]", "mt-[0.2px]", "mt-[7px]"],
  xl: ["text-xl", "text-xs", "mt-[1px]", "mt-[1px]", "mt-[9px]"],
  "2xl": ["text-2xl", "text-sm", "mt-[1px]", "mt-[1px]", "mt-[9px]"],
  "3xl": ["text-3xl", "text-sm", "mt-[2px]", "mt-[1px]", "mt-[11px]"],
};
export default function Pricing({ price, priceDec, size }) {
  return (
    <div className="flex">
      <div className={`flex items-center}`}>
        <div className={`font-semibold ${sizeDictionary[size][0]}`}>
          {price}
        </div>
        <div
          className={`relative flex flex-col items-center h-full ${sizeDictionary[size][1]} ${sizeDictionary[size][2]} `}
        >
          <div className={`h-0 ${sizeDictionary[size][3]} `}>{priceDec}</div>
          <div className={`h-0 ${sizeDictionary[size][4]} text-primary `}>
            лв.
          </div>
        </div>
      </div>
    </div>
  );
}
