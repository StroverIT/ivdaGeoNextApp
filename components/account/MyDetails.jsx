import React from "react";

import Input from "../../components/form/Input";

export default function MyDetails() {
  return (
    <section>
      <h2 className="text-3xl ">Детайли на акаунта</h2>

      <div className="divide-y">
        <section className="">
          <h4 className="text-xl">Лична информация</h4>
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
          <h4 className="text-xl">И-мейл адрес</h4>
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
        <section className="">
          <h4 className="text-xl">Парола</h4>
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
        </section>
      </div>
    </section>
  );
}
