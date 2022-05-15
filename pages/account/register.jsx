import React, { useState, useRef } from "react";

// NextJs
import Head from "next/head";
import Link from "next/link";
// Components
import Input from "../../components/form/Input";

const errDict = {
  samePass: "Паролите трябва да съвпадат!",
};
const Register = () => {
  const [errorMessage, setErrorMessage] = useState([]);
  const [password, setPassword] = useState(null);

  function formHandler(e) {
    if (e.target.id == "password") {
      setPassword(e.target.value);
    }
    if (e.target.id == "repeatPassword") {
      if (e.target.value != password) {
        if (errorMessage.includes(errDict.samePass)) return;
        setErrorMessage((oldArray) => [...oldArray, errDict.samePass]);
      } else {
        setErrorMessage(
          errorMessage.filter((item) => item != errDict.samePass)
        );
      }
    }
  }
  return (
    <>
      <Head>
        <title>IvdaGeo register page</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>

      <main>
        <div className="container flex justify-center">
          <div className="w-full bg-white rounded shadow-xl lg:w-1/2">
            <div className="my-5 ml-8">
              <h3 className="text-3xl">Влезте във вашият акаунт</h3>
              <p className="mt-1">
                Вече имате профил?
                <Link href="/account/login">
                  <span className="ml-1 cursor-pointer text-primary-lighter hover:font-bold">
                    Вход
                  </span>
                </Link>
              </p>
              <div className="text-secondary">
                <ul>
                  {errorMessage.map((e) => {
                    return <li key={e}>{e}</li>;
                  })}
                </ul>
              </div>
            </div>

            <form
              className="px-8 pt-6 pb-8 mb-4 "
              onChange={(e) => formHandler(e)}
            >
              <Input
                placeholder="Пълно име"
                type="text"
                id="fullName"
                isReq={true}
                iconType="fullName"
              />
              <Input
                placeholder="И-мейл"
                type="email"
                id="email"
                isReq={true}
                iconType="email"
              />
              <Input
                placeholder="Парола"
                type="password"
                id="password"
                isReq={true}
                iconType="password"
              />
              <Input
                placeholder="Потвърдете паролата"
                type="password"
                id="repeatPassword"
                isReq={true}
                iconType="password"
                onKeyPress={(e) => console.log("true")}
              />
              <div className="flex justify-between mb-2 select-none">
                <div>
                  <input
                    className="w-4 h-4 mt-1 mr-2 align-top border-gray accent-primary-lighter"
                    type="checkbox"
                    id="termсАndСonditions"
                    value="termсАndСonditions"
                  />
                  <label
                    className="inline-block form-check-label"
                    htmlFor="termсАndСonditions"
                  >
                    Приемам
                    <Link href="/rulesAndPrivacy">
                      <span className="mx-1 cursor-pointer text-primary-lighter hover:underline">
                        правилата и условията
                      </span>
                    </Link>
                    на ИвдаГео
                  </label>
                </div>
              </div>
              <div className="flex justify-between mb-5 select-none">
                <div>
                  <input
                    className="w-4 h-4 mt-1 mr-2 align-top border-gray accent-primary-lighter"
                    type="checkbox"
                    id="personalData"
                    value="personalData"
                  />
                  <label
                    className="inline-block form-check-label"
                    htmlFor="personalData"
                  >
                    Приемам
                    <Link href="/rulesAndPrivacy">
                      <span className="mx-1 cursor-pointer text-primary-lighter hover:underline">
                        условията за поверителност на лични данни
                      </span>
                    </Link>
                    на ИвдаГео
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <button
                  className="w-full px-4 py-2 font-bold text-white rounded shadow-md bg-primary hover:bg-primary focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Вход
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
