import React, { useState, useEffect } from "react";

// NextJs
import Head from "next/head";
import Link from "next/link";
// Components
import Input from "../../components/form/Input";

const samePass = "Паролите трябва да съвпадат!";

const errDict = {
  upperLett: ["Паролата трябва да съдържа главна буква!", false],
  threeNums: ["Паролата трябва да съдържа поне една цифра", false],
  fiveChar: ["Паролата трябва да е поне пет символа", false],
};
const Register = () => {
  const [errorMessage, setErrorMessage] = useState([]);
  const [password, setPassword] = useState(null);
  const [isSame, setSame] = useState(false);
  const [disabled, setDisabled] = useState(true);
  function formHandler(e) {
    if (e.target.id == "password") {
      setPassword(e.target.value);
      if (e.target.value.length >= 5) {
        errDict.fiveChar[1] = true;
      } else errDict.fiveChar[1] = false;

      if (/\d/.test(e.target.value)) {
        errDict.threeNums[1] = true;
      } else errDict.threeNums[1] = false;

      if (/[A-Z]/.test(e.target.value)) {
        errDict.upperLett[1] = true;
      } else errDict.upperLett[1] = false;

      const errors = [];

      for (let err in errDict) {
        if (!errDict[err][1]) {
          console.log(errDict[err]);
          errors.push(errDict[err][0]);
        }
      }
      setErrorMessage(() => [...errors]);
    }
    if (e.target.id == "repeatPassword") {
      if (e.target.value != password) {
        if (errorMessage.includes(samePass)) return;
        setErrorMessage((oldArray) => [...oldArray, samePass]);
        setSame(false);
      } else {
        setErrorMessage(errorMessage.filter((item) => item != samePass));
        console.log("ednakvi!");
        setSame(true);
      }
    }
  }
  useEffect(() => {
    if (isSame && errorMessage.length == 0) {
      console.log("mina");
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [isSame]);
  return (
    <>
      <Head>
        <title>IvdaGeo register page</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>

      <main>
        <div className="container flex justify-center my-10">
          <div className="w-full bg-white rounded shadow-xl lg:w-1/2">
            <div className="mt-5 ml-8">
              <h3 className="text-3xl">Влезте във вашият акаунт</h3>
              <p className="mt-1">
                Вече имате профил?
                <Link href="/account/login">
                  <span className="ml-1 cursor-pointer text-primary-lighter hover:font-bold">
                    Вход
                  </span>
                </Link>
              </p>
              <div className="my-2 text-secondary">
                <ul>
                  {errorMessage.map((e) => {
                    return <li key={e}>{e}</li>;
                  })}
                </ul>
              </div>
            </div>

            <form
              className="px-8 pt-1 pb-8 mb-4 "
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
              />
              {/* <div className="flex justify-between mb-2 select-none">
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
              </div> */}
              <div className="flex items-center justify-center ">
                <button
                  className="w-full px-4 py-2 font-bold text-white rounded shadow-md disabled:opacity-25 bg-primary hover:bg-primary focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={disabled}
                >
                  Регистрация
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
