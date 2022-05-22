import React from "react";

import { useRouter } from "next/router";

export default function section() {
  const router = useRouter();
  const { section } = router.query;
  return (
    <main className="mb-auto">
      <div className="container md:grid grid-cols-[20%80%]">
        <aside className="hidden md:block"></aside>
        <section>
          <div className="md:hidden grid grid-cols-2 gap-2">
            {/* TODO: add icons */}
            <button
              type="button"
              className="w-full h-full text-left text-white bg-primary pl-4 py-2"
            >
              Филтри
            </button>
            <button
              type="button"
              className="w-full h-full text-left border border-gray pl-4 py-2"
            >
              Сортирай по:
            </button>
          </div>
          <section>
            <div className="grid grid-cols-[80%20%]">
              <div></div>
              <div></div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
