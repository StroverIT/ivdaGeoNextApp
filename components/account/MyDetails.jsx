import React from "react";

export default function MyDetails() {
  return (
    <section>
      <h2 className="text-3xl ">Детайли на акаунта</h2>

      <div className="divide-y">
        <section className="">
          <h4 className="text-xl">Лична информация</h4>
        </section>
        <section className="">
          <h4 className="text-xl">И-мейл адрес</h4>
        </section>
        <section className="">
          <h4 className="text-xl">Парола</h4>
        </section>
      </div>
    </section>
  );
}
