import React from "react";

export default function Checkbox({ text, quantity, id }) {
  return (
    <div>
      <input
        className="w-4 h-4 mt-1 mr-2 align-top border-gray accent-primary-lighter"
        type="checkbox"
        id={id}
        value="option1"
      />
      <label
        className="inline-block font-semibold select-none form-check-label"
        htmlFor={id}
      >
        {text}
        {quantity && <span className="pl-1 text-[#aaa]">({quantity})</span>}
      </label>
    </div>
  );
}
