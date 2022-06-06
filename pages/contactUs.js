import React from "react";

// NextJs
import Head from "next/head";

// Components
import Input from "../components/form/Input";

export default function contactUs() {
  return (
    <>
      <Head></Head>

      <main>
        <div className="container lg:grid grid-cols-2 ">
          <div>
            <h3 className="font-medium text-2xl uppercase">Контакти</h3>
            <ul className="text-gray-250 mt-2">
              <li className="py-1">
                <span className="font-semibold text-dark pr-2">
                  Заповядайте в нашия магазин:
                </span>
                <br />
                гр.София ПК-1582 Дружба 2 РУМ Дружба 2 срещу блок 204
              </li>
              <li className="py-1">
                <span className="font-semibold text-dark pr-2">
                  Тел. / факс:
                </span>
                02/973 15 85
              </li>
              <li className="py-1">
                <span className="font-semibold text-dark pr-1">GSM:</span> 0888
                900746, 0879 406620
              </li>
              <li>
                <span className="font-semibold text-dark pr-1">Е-mail:</span>
                ivda_geo@abv.bg
              </li>
            </ul>
          </div>
          <div>
            <form action="">
              <Input
                type="text"
                placeholder="Име"
                id="name"
                isReq={true}
                iconType="name"
              />
              <Input
                type="email"
                placeholder="И-мейл"
                id="email"
                isReq={true}
                iconType="email"
              />
              <Input
                type="text"
                placeholder="Заглавие"
                id="title"
                isReq={true}
                iconType="title"
              />
              <textarea
                name="description"
                id="description"
                placeholder="Съобщение"
              ></textarea>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
