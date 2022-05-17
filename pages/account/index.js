import React, { useRef, useState, useEffect } from "react";

// NextJs
import Head from "next/head";
import Link from "next/link";
// Components
import Input from "../../components/form/Input";
// Account components
import MyDetails from "../../components/account/MyDetails";
import MyOrders from "../../components/account/MyOrders";
import AccountSettings from "../../components/account/AccountSettings";

export default function index() {
  const [page, setPage] = useState();
  const content = useRef(null);

  return (
    <>
      <Head>
        <title>IvdaGeo my account</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>
      <main className="mt-5 mb-auto">
        <div className="container justify-center ">
          <h3 className="text-3xl">Моят акаунт</h3>

          <div className="flex">
            <aside className="sticky">
              <ul>
                <li>{/*"Icon"*/}Моите детайли</li>
                <li>{/*"Icon"*/}Направени поръчки</li>
                <li>{/*"Icon"*/}Настройки на акаунта</li>
              </ul>
            </aside>
            <section ref={content}></section>
          </div>
        </div>
      </main>
    </>
  );
}
