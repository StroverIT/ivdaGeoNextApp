import React from "react";

export default function AsideHeader({ text }) {
  return (
    <div className="relative filter-container">
      <h3 className="filter-header">{text}</h3>
    </div>
  );
}
