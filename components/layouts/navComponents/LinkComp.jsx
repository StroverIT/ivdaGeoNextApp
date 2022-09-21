import React from "react";
import Link from "next/link";
import { translationToRoute } from "../../../utils/translationToRoute";

function LinkComp({ route, className }) {
  return (
    <Link href={`/products/${translationToRoute(route)}`}>
      <li
        className={`hover:translate-x-1   cursor-pointer hover:text-primary  transition-transform font-sans max-w-full leading-5 py-1 ${className} max-lg:container`}
      >
        {route}
      </li>
    </Link>
  );
}

export default LinkComp;
