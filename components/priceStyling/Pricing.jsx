import React from "react";

export default function Pricing({ price, priceDec }) {
  return (
    <div className="flex">
      <div className={`flex items-center px-2 py-2  `}>
        <div className="text-2xl font-semibold">{price}</div>
        <div className="relative flex flex-col items-center h-full text-sm">
          <div className="h-0 mt-1 font-semibold">{priceDec}</div>
          <div className="h-0 mt-[8.8px]">лв.</div>
        </div>
      </div>
    </div>
  );
}
