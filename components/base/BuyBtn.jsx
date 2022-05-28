import React from "react";

export default function BuyBtn({ border }) {
  return (
    <div className={`${border ? "border-t border-gray" : ""}`}>
      <button
        type="button"
        className="w-full py-1 my-10 font-semibold text-white rounded-full bg-primary lg:my-5"
      >
        Купи
      </button>
    </div>
  );
}
