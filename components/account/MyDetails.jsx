import React from "react";

import Input from "../../components/form/AccInput";

export default function MyDetails() {
  return (
    <section className="">
      <h2 className="mb-5 text-3xl font-semibold text-center">
        Детайли на акаунта
      </h2>

      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          Лична информация
        </h4>
        <div className="grid grid-cols-[45%55%] py-10 gap-6">
          <section className="text-sm text-gray-darker">
            <p>
              Тука може да си смените името или телефоният номер.
              <br />
              Като първоначално са показаните първоначално попълнените ви данни
            </p>
          </section>
          <section className="">
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
        <section className="grid grid-cols-[45%55%] py-10 gap-5">
          <section className="text-sm text-gray-darker">
            <p>
              Тука може да си смените и-мейл адреса и да потвърдите с текущата
              ви парола
            </p>
          </section>

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
              <button
                type="submmit"
                className="px-5 py-2 text-white bg-primary-lighter hover:bg-primary-trans"
              >
                Запази
              </button>
            </form>
          </section>
        </section>
      </section>
      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          Парола
        </h4>
        <section className="grid grid-cols-[45%55%] py-10 gap-5">
          <section className="text-sm text-gray-darker">
            <p>Тука можете да си смените паролата</p>
          </section>

          <section className="">
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
              <button
                type="submmit"
                className="px-5 py-2 text-white bg-primary-lighter hover:bg-primary-trans"
              >
                Запази
              </button>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
}
