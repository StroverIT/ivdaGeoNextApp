import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
// Components
import Main from "./productActions/Main";
import Create from "./productActions/Create";
export default function Products({ sections }) {
  const router = useRouter();
  const [action, setAction] = useState();

  useEffect(() => {
    const categoryComp = {
      "#getAll": [<Main key="GetAll" sections={sections} />],
      "#create": [<Create key="Create" />],
    };
    const hash = window.location.hash.split("#");
    const someData = categoryComp[`#${hash[2]}`] ?? categoryComp["#getAll"]; // Retrieve data based on URL fragment
    setAction(someData[0]);
  }, [router, sections]);

  return <div>{action}</div>;
}
