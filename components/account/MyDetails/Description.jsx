import React from "react";

export default function Description({ text }) {
  return (
    <section className="text-sm text-gray-darker">
      <p>{text}</p>
    </section>
  );
}
