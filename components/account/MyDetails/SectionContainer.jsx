import React from "react";

export default function Section({ content }) {
  return (
    <section className="flex flex-col justify-center md:justify-between items-center md:items-start md:grid grid-cols-[45%55%] py-10 gap-5 w-full">
      {content}
    </section>
  );
}
