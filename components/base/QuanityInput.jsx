import React, { useState, useRef } from "react";
// Icons
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function QuanityInput() {
  const qty = useRef(null);

  const [currQty, setQty] = useState(1);
  if (currQty < 0) setQty(0);
  return (
    <div className="relative">
      <input
        type="number"
        className="w-full border border-l pl-4  border-primary py-[0.3rem] placeholder:text-sm placeholder:font-default placeholder:text-[#808080] placeholder:absolute placeholder:left-2 placeholder:top-1/2 placeholder:-translate-y-1/2"
        value={currQty}
        id="qty"
        onChange={(e) => setQty(e.target.value)}
        ref={qty}
      />
      <div className="absolute top-1/2 right-2 -translate-y-1/2 select-none">
        <div className="cursor-pointer" onClick={() => setQty(currQty + 1)}>
          <IoIosArrowUp />
        </div>
        <div className="cursor-pointer" onClick={() => setQty(currQty - 1)}>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}
