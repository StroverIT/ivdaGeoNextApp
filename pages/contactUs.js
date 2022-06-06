import React from "react";

// Icons
import { AiFillEdit } from "react-icons/ai";

// NextJs
import Head from "next/head";

// Components
import Input from "../components/form/Input";
import OutlinedBtn from "../components/buttons/Outlined";

export default function contactUs() {
  return (
    <>
      <Head></Head>

      <main className="my-10">
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
          <div className="my-10 lg:my-0 lg:w-10/12">
            <form action="">
              <Input
                type="text"
                placeholder="Име"
                id="name"
                isReq={true}
                iconType="fullName"
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
              <div className="relative">
                <textarea
                  name="description"
                  id="description"
                  placeholder="Съобщение"
                  className="w-full placeholder:text-gray-darker pl-6 border pt-2 pb-10"
                ></textarea>
                <div className="absolute top-[13px] left-1">
                  <AiFillEdit />
                </div>
              </div>
              <div className="mt-1">
                <OutlinedBtn type="submit" text="Изпрати" />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
