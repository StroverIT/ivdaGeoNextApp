import React from "react";

export default function Checkbox({ text, quantity, id }) {
  return (
    <div className="form-check">
      <input
        className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
        type="checkbox"
        id={id}
        value="option1"
      />
      <label
        className="inline-block font-semibold text-gray-800 select-none form-check-label "
        htmlFor={id}
      >
        {text}
        {quantity && <span className="pl-1 text-[#aaa]">({quantity})</span>}
      </label>
    </div>
  );
}
