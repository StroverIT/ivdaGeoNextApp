import React from "react";

import Input from "../../form/AccInput";

import Description from "./Description";
import SectionForm from "./SectionForm";

export default function InnerSection({ description, form }) {
  return (
    <>
      <Description text={description} />

      <section className="">
        <SectionForm inputs={form} />
      </section>
    </>
  );
}
