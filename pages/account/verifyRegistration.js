import React from "react";

// NextJs
import Head from "next/head";
import Link from "next/link";

export default function resetPassword() {
  return (
    <>
      <Head>
        <title>IvdaGeo reset password</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>
      <main>
        <div className="container flex justify-center my-10">
          <h3 className="text-2xl text-center">
            Успешна направена регистрация!
          </h3>
          <div className="w-full bg-white rounded shadow-xl lg:w-1/2">
            Преди да продължим{" "}
          </div>
        </div>
      </main>
    </>
  );
}
