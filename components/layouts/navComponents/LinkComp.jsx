import React from "react";
import Link from "next/link";
import { translationToRoute } from "../../../utils/translationToRoute";

function LinkComp({ route, className }) {
  return (
    <Link href={`/products/${translationToRoute(route)}`}>
      <li
        className={`hover:translate-x-1    cursor-pointer hover:text-primary  transition-transform font-sans max-w-full ${className}`}
      >
        {route}
      </li>
    </Link>
  );
}

export default LinkComp;
