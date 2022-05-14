// React
import React from "react";
// Icons and images

// Next
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Input from "../../components/form/Input";

const Login = () => {
  return (
    <>
      <Head>
        <title>IvdaGeo login page</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>

      <main>
        <div className="container justify-center grid-cols-2 xl:grid ">
          <div className="w-full bg-white rounded shadow-xl">
            <div className="my-5 ml-8">
              <h3 className="text-3xl">Влезте във вашият акаунт</h3>
              <p className="mt-1">
                Все още нямате профил?
                <Link href="/account/register">
                  <span className="ml-1 cursor-pointer text-primary-lighter">
                    Регистрация
                  </span>
                </Link>
              </p>
            </div>

            <form className="px-8 pt-6 pb-8 mb-4 ">
              
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
              <div className="flex justify-between my-8 select-none">
                <div>
                  <input
                    className="w-4 h-4 mt-1 mr-2 align-top border-gray accent-primary-lighter"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label
                    className="inline-block form-check-label"
                    htmlFor="inlineCheckbox1"
                  >
                    Запомни ме
                  </label>
                </div>

                <div>
                  <Link href="/account/resetPassword">
                    <a
                      className="inline-block text-sm align-baseline hover:font-bold text-primary-lighter"
                      href="#"
                    >
                      Забравена парола
                    </a>
                  </Link>
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
          {/* Image is the something of ivdaGeo */}
          <div className="relative hidden w-full ml-2 h-96 xl:block">
            <Image src="/images/testCarousel.jpg" layout="fill" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
