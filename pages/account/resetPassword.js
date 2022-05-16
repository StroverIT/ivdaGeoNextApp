import React from "react";

// NextJs
import Head from "next/head";

// Components
import Input from "../../components/form/Input";

export default function resetPassword() {
  return (
    <>
      <Head>
        <title>IvdaGeo reset password</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>
      <main>
        <div className="container flex justify-center my-10">
          <div className="w-full bg-white rounded shadow-xl lg:w-1/2">
            <div className="mt-5 ml-8">
              <h3 className="text-3xl text-center">Забравена парола</h3>
              {/* <div className="my-2 text-secondary">
                <ul>
                  {errorMessage.map((e) => {
                    return <li key={e}>{e}</li>;
                  })}
                </ul>
              </div> */}
            </div>

            <form className="px-8 pt-1 pb-8 mt-6 mb-4">
              <Input
                placeholder="И-мейл"
                type="email"
                id="email"
                isReq={true}
                iconType="email"
              />

              <div className="flex items-center justify-center ">
                <button
                  className="w-full px-4 py-2 font-bold text-white rounded shadow-md disabled:opacity-25 bg-primary hover:bg-primary focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Изпрати
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
