import React from "react";
import Input from "../../form/AccInput";
import TelephoneInput from "../../form/TelephoneInput";

export default function SectionForm({ inputs, getOuterVal }) {
  return (
    <>
      {inputs.map((input) => {
        return input.type != "phoneNumber" ? (
          <Input
            placeholder={input.placeholder}
            id={input.id}
            type={input.type}
            isReq={input.isReq}
            iconType={input.iconType}
            key={input.id}
            defValue={input.defValue}
          />
        ) : (
          <TelephoneInput
            placeholder={input.placeholder}
            id={input.id}
            type={input.type}
            isReq={input.isReq}
            iconType={input.iconType}
            key={input.id}
            defValue={input.defValue}
            getOuterVal={getOuterVal}
          />
        );
      })}
      <button
        type="submit"
        className="px-5 py-2 text-white bg-primary-lighter hover:bg-primary-trans"
      >
        Запази
      </button>
    </>
  );
}
