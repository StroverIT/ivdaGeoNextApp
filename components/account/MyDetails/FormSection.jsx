import React from "react";
import Input from "../../form/AccInput";
export default function SectionForm({ inputs }) {
  return (
    <form action="">
      {inputs.map((input) => {
        return (
          <Input
            placeholder={input.placeholder}
            id={input.id}
            type={input.type}
            isReq={input.isReq}
            iconType={input.iconType}
            key={input.id}
          />
        );
      })}
      <button
        type="submit"
        className="px-5 py-2 text-white bg-primary-lighter hover:bg-primary-trans"
      >
        Запази
      </button>
    </form>
  );
}
