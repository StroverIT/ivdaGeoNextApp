import React, { useRef } from "react";

// NextJs
import Head from "next/head";
import Link from "next/link";
// Components
import Input from "../../components/form/Input";

export default function index() {
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

          <div>
            <aside></aside>
            <section ref={content}></section>
          </div>
        </div>
      </main>
    </>
  );
}
