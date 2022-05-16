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
          <div className="w-full bg-white rounded shadow-xl lg:w-2/3 flex flex-col justify-center items-center py-10 ">
            <h3 className="text-2xl  ">Успешна регистрация!</h3>
            <div className="font-thin mt-5">
              <p>
                За да имате възможност да си влезете в акаунта, първо трябва да
                си потвърдите акаунта.
              </p>
              <p>Пратили сме ви инструкции на регистрираният имейл адрес.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
