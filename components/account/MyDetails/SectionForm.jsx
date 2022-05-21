import React from "react";
import Input from "../../form/AccInput";
export default function SectionForm({ inputs }) {
  return (
    <form action="">
      {inputs.map((input) => {
        return (
          <Input
            placeholder={input.placeholder}
            id={input.data}
            type={input.type}
            isReq={input.isReq}
            iconType={input.iconType}
          />
        );
      })}
      <button
        type="submmit"
        className="px-5 py-2 text-white bg-primary-lighter hover:bg-primary-trans"
      >
        Запази
      </button>
    </form>
  );
}
