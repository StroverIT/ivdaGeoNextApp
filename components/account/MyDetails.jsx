import React from "react";

import Input from "../../components/form/AccInput";

export default function MyDetails() {
  return (
    <section>
      <h2 className="mb-5 text-3xl font-semibold">Детайли на акаунта</h2>

      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          Лична информация
        </h4>
        <div className="grid grid-cols-2">
          <section></section>
          <section>
            <form action="">
              <Input
                placeholder="Пълно име"
                iconType="fullName"
                isReq={true}
                type="text"
                id="fullname"
              />
              <Input
                placeholder="Телефонен номер"
                id="phoneNumber"
                isReq={true}
                iconType="phoneNumber"
              />
              <button
                type="submmit"
                className="px-5 py-2 text-white bg-primary-lighter hover:bg-primary-trans"
              >
                Запази
              </button>
            </form>
          </section>
        </div>
      </section>
      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          И-мейл адрес
        </h4>
        <section className="py-4">
          <form action="">
            <Input
              placeholder="И-мейл адрес"
              iconType="email"
              id="email"
              type="email"
              isReq={true}
            />
            <Input
              placeholder="Парола"
              iconType="password"
              id="password"
              type="password"
              isReq={true}
            />
          </form>
        </section>
      </section>
      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          Парола
        </h4>
        <section className="py-4">
          <form action="">
            <Input
              placeholder="Сегашна парола"
              id="currentPassword"
              type="text"
              isReq={true}
              iconType="password"
            />
            <Input
              placeholder="Нова парола"
              id="newPassword"
              type="password"
              isReq={true}
              iconType="password"
            />
            <Input
              placeholder="Потвърди новата парола"
              id="newPasswordConf"
              type="password"
              isReq={true}
              iconType="password"
            />
          </form>
        </section>
      </section>
    </section>
  );
}
