import React from "react";

// My accouts components
import SectionContainer from "./SectionContainer";
import InnerSection from "./InnerSection";

const inputDataPersonal = [
  {
    placeholder: "Пълно име",
    id: "fullname",
    type: "text",
    isReq: true,
    iconType: "fullName",
  },
  {
    placeholder: "Телефонен номер",
    id: "phoneNumber",
    type: "text",
    isReq: true,
    iconType: "phoneNumber",
  },
];
const inputDataEmail = [
  {
    placeholder: "И-мейл адрес",
    id: "email",
    type: "email",
    isReq: true,
    iconType: "email",
  },
  {
    placeholder: "Парола",
    id: "password",
    type: "password",
    isReq: true,
    iconType: "password",
  },
];
const inputDataPass = [
  {
    placeholder: "Сегашна парола",
    id: "currentPassword",
    type: "text",
    isReq: true,
    iconType: "password",
  },
  {
    placeholder: "Нова парола",
    id: "newPassword",
    type: "password",
    isReq: true,
    iconType: "password",
  },
  {
    placeholder: "Потвърди новата парола",
    id: "newPasswordConf",
    type: "password",
    isReq: true,
    iconType: "password",
  },
];

export default function MyDetails() {
  return (
    <section>
      <h2 className="mb-5 text-3xl font-semibold text-center mt-5">
        Детайли на акаунта
      </h2>

      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          Лична информация
        </h4>
        <SectionContainer
          content={
            <InnerSection
              description={`Тука може да си смените името или телефоният номер.
              Като първоначално са показани попълнените ви данни`}
              form={inputDataPersonal}
            />
          }
        />
      </section>
      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          И-мейл адрес
        </h4>
        <SectionContainer
          content={
            <InnerSection
              description={`Тука може да си смените и-мейл адреса и да потвърдите като трябва
              да потвърдите с текущата си парола`}
              form={inputDataEmail}
            />
          }
        />
      </section>
      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          Парола
        </h4>

        <SectionContainer
          content={
            <InnerSection
              description={"Тука можете да си смените паролата"}
              form={inputDataPass}
            />
          }
        />
      </section>
    </section>
  );
}
