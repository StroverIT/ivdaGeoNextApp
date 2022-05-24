import React from "react";

export default function Checkbox() {
  return (
    <>
      <input
        className="w-4 h-4 mt-1 mr-2 align-top border-gray accent-primary-lighter"
        type="checkbox"
        id="blackAndDecker"
        value="option1"
      />
      <label
        className="inline-block select-none form-check-label"
        htmlFor="blackAndDecker"
      >
        BLACK&DECKER
        <span>{/*quantity */}</span>
      </label>
    </>
  );
}
