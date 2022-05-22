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
          <div className="md:hidden grid grid-cols-2">
            <div>
              <button type="button" className="w-full h-full text-left">
                Филтри
              </button>
            </div>
            <div>
              <button type="button" className="w-full h-full text-left">
                Сортирай по:{" "}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
