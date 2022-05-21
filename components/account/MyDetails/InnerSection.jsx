import React from "react";

import Input from "../../form/AccInput";

import Description from "./Description";
import SectionForm from "./FormSection";

export default function InnerSection({ description, form }) {
  return (
    <>
      <Description text={description} />

      <section className="w-full">
        <SectionForm inputs={form} />
      </section>
    </>
  );
}
