import React from "react";

import { useRouter } from "next/router";

export default function section() {
  const router = useRouter();
  const { section } = router.query;
  return (
    <main className="mb-auto">
      <div className="container md:grid grid-cols-[20%80%]">
        <aside className="hidden md:block"></aside>
        <section></section>
      </div>
    </main>
  );
}
