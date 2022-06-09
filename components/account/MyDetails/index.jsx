import React from "react";

// My accouts components
import SectionContainer from "./SectionContainer";
import InnerSection from "./InnerSection";
import SectionForm from "./FormSection";

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
      <h2 className="mt-5 mb-5 text-3xl font-semibold text-center">
        Детайли на акаунта
      </h2>

      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          Лична информация
        </h4>
        {/* description={`Тука може да си смените името или телефоният номер.
              Като първоначално са показани попълнените ви данни`}
              form={inputDataPersonal} */}
        <SectionContainer>
          <InnerSection>
            <p className="text-gray-200 ">
              Тука може да си смените името или телефоният номер. Като
              първоначално са показани попълнените ви данни
            </p>
          </InnerSection>
          <InnerSection>
            <SectionForm inputs={inputDataPersonal} />
          </InnerSection>
        </SectionContainer>
      </section>
      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          И-мейл адрес
        </h4>
        <SectionContainer>
          <InnerSection>
            <p className="text-gray-200 ">
              Тука може да си смените и-мейл адреса, като трябва да потвърдите с
              текущата си парола
            </p>
          </InnerSection>
          <InnerSection>
            <SectionForm inputs={inputDataEmail} />
          </InnerSection>
        </SectionContainer>
      </section>
      <section className="">
        <h4 className="py-1 text-xl font-semibold border-b border-gray">
          Парола
        </h4>

        <SectionContainer>
          <InnerSection>
            <p className="text-gray-200 ">
              Тука можете да си смените паролата на акаунта
            </p>
          </InnerSection>
          <InnerSection>
            <SectionForm inputs={inputDataPass} />
          </InnerSection>
        </SectionContainer>
      </section>
    </section>
  );
}
