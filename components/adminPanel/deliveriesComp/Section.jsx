import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { BsArrowReturnLeft } from "react-icons/bs";

import Product from "./Product";

export default function Section({ delivery }) {
  const router = useRouter();
  const id = router.asPath.split("#");

  const [dynamicDel, setDynamicDel] = useState(null);

  useEffect(() => {
    if (id[3]) {
      console.log(id[3]);
      const newProdArt = delivery?.slice().find((item) => item._id == id[3]);
      if (newProdArt) {
        setDynamicDel([newProdArt]);
      }
    } else {
      setDynamicDel(delivery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);
  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-5">
        <div>
          <button
            className="my-5 text-2xl text-primary-lighter"
            onClick={() => router.push("/adminPanel#dostavki")}
          >
            <BsArrowReturnLeft />
          </button>
        </div>
        {dynamicDel?.length != delivery?.length && (
          <div>
            <button
              className="px-6 py-1 text-white border bg-primary-lighter border-primary-lighter"
              onClick={() => router.push(`/adminPanel#dostavki#${id[2]}`)}
            >
              Виж всички
            </button>
          </div>
        )}
      </div>
      {dynamicDel &&
        dynamicDel.map((delivery) => {
          console.log(delivery);
          return <Product delivery={delivery} key={delivery._id} />;
        })}
    </section>
  );
}
