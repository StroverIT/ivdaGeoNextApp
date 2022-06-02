// React
import React from "react";

import Pricing from "./Pricing";

const PricePromo = ({ isPromo, price, priceDec }) => {
  return (
    <div className=" border-t border-gray w-full ">
      <div className="flex justify-end">
        <div
          className={` inline-flex items-center justify-center   text-white  ${
            !isPromo ? "bg-primary" : " bg-secondary"
          }`}
        >
          <Pricing price={price} priceDec={priceDec} size="xl" />
        </div>
      </div>
    </div>
  );
};

export default PricePromo;
