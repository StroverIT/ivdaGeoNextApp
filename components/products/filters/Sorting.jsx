import React from "react";

export default function Sorting() {
  return (
    <div className="flex">
      <label htmlFor="sortBy">Сортирай:</label>
      <div>
        <select name="sortBy" id="sortBy">
          <option value="nameAsc">Име (възходящ ред)</option>
          <option value="nameDesc">Име (низходящ ред)</option>
          <option value="priceAsc">Цена (възходящ ред)</option>
          <option value="priceDesc">Цена (низходящ ред)</option>
        </select>
      </div>
      <input type="text" />
    </div>
  );
}
