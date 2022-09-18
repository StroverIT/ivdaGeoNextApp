import React from "react";
import { useRouter } from "next/router";

import GetAll from "./GetAll";
import Sections from "./getAll/Sections";

export default function Main({ sections }) {
  const router = useRouter();
  const changeTypeAction = (type) => {
    // Trigger fragment change to fetch the new data
    router.push(`/adminPanel/#prodykti#${type}`, undefined, { shallow: true });
  };

  return (
    <div className="mt-10">
      <div className="flex justify-end">
        <button
          onClick={() => changeTypeAction("create")}
          className="px-5 text-sm border border-green text-green hover"
        >
          Създай продукт
        </button>
      </div>
      <section className="my-5">
        {sections.length > 0 &&
          sections.map((section) => {
            return <Sections key={section._id} section={section} />;
          })}
      </section>
    </div>
  );
}
