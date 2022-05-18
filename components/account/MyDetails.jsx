import React from "react";

import Input from "../../components/form/AccInput";

export default function MyDetails() {
  return (
    <section>
      <h2 className="text-3xl ">Детайли на акаунта</h2>

      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          Лична информация
        </h4>
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
        </form>
      </section>
      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          И-мейл адрес
        </h4>
        <section className="">
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
  );
}
