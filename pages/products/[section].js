import React from "react";

import { useRouter } from "next/router";

export default function section() {
  const router = useRouter();
  const { section } = router.query;
  console.log(section);
  return <div>test</div>;
}
