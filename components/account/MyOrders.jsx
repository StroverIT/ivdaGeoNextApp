import React from "react";

import Input from "../../components/form/AccInput";

export default function MyOrders() {
  return (
    <section className="">
      <h2 className="mb-5 text-3xl font-semibold text-center">
        Направените от вас поръчки
      </h2>
      {/* If no orders */}
      <div className="text-center pb-10 text-secondary">
        Нямате направени поръчки
      </div>
    </section>
  );
}
