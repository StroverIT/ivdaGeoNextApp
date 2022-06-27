import React, { useState, useEffect } from "react";

// NextJs
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Input from "../../components/form/Input";

// Auth
import { getSession } from "next-auth/react";
import { fullNameVal, emailVal } from "../../utils/validationHandler";

const Register = () => {
  const router = useRouter();

  const [errorMessages, setErrorMessages] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    //Getting value from useRef()
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("repeatPassword");
    const fullName = formData.get("fullName");
    const repeatPassword = formData.get("repeatPassword");

    //POST form values
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: fullName,
        repeatPassword,
      }),
    });

    //Await for data for any desirable next steps
    if (res.status != 201) {
      const data = await res.json();
      console.log(data);
      setErrorMessages([...errorMessages, data.map((e) => e)]);
      return;
    }
    // MUST SEND A EMAIL FOR VERIFICATION

    // Redirect
    router.push("/account/verifyRegistration");
  };
  const formHandler = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    const fullName_name = targetName == "fullName";
    const email_name = targetName == "email";
    const password_name = targetName == "password";
    const repeatPassword_name = targetName == "repeatPassword";
    if (fullName_name) {
      const fullNameCheck = fullNameVal(targetValue);
    }
    if (email_name) {
      const emailCheck = emailVal(targetValue);
    }

    if (errorMessages.length == 0) setDisabled(false);
  };
  return (
    <>
      <Head>
        <title>IvdaGeo register page</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>

      <main>
        <div className="container flex justify-center my-24">
          <div className="w-full bg-white rounded shadow-xl lg:w-1/2">
            <div className="mt-5 ml-8">
              <h3 className="text-2xl">Регистрирайте се, безплатно!</h3>
              <p className="mt-1">
                Вече имате профил?
                <Link href="/account/login">
                  <span className="ml-1 cursor-pointer text-primary-lighter hover:font-bold">
                    Вход
                  </span>
                </Link>
              </p>
              {errorMessages && (
                <div className="my-2 font-medium text-center text-secondary">
                  <ul>
                    {errorMessages &&
                      errorMessages.map((e) => {
                        return <li key={e}>{e}</li>;
                      })}
                  </ul>
                </div>
              )}
            </div>

            <form
              className="px-8 pt-1 pb-8 mt-6 mb-4"
              onChange={(e) => formHandler(e)}
              onSubmit={(e) => onFormSubmit(e)}
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

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/account",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
