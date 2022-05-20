import React, { useState, useEffect, useRef } from "react";

// NextJs
import Head from "next/head";
import { useRouter } from "next/router";

// Account components
import MyDetails from "../../components/account/MyDetails";
import MyOrders from "../../components/account/MyOrders";
import AccountSettings from "../../components/account/AccountSettings";

export default function index() {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState(null);

  const myDetails = useRef(null);
  const myOrders = useRef(null);
  const mySettings = useRef(null);

  const categoryComp = {
    "#account-details": [<MyDetails />, myDetails],
    "#my-orders": [<MyOrders />, myOrders],
    "#account-settings": [<AccountSettings />, mySettings],
  };

  const changeCategory = (category) => {
    // Trigger fragment change to fetch the new data
    router.push(`/account/#${category}`, undefined, { shallow: true });
  };

  useEffect(() => {
    const someData =
      categoryComp[window.location.hash] ?? categoryComp["#account-details"]; // Retrieve data based on URL fragment
    setCategoryData(someData[0]);
    for (let category in categoryComp) {
      categoryComp[category][1].current.classList.remove("acc-active");
    }
    someData[1].current.classList.add("acc-active");
  }, [router]);

  return (
    <>
      <Head>
        <title>IvdaGeo my account</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>
      <main className="mb-auto">
        <div className="">
          <div className="container items-start justify-center">
            <h3 className="text-3xl">Моят акаунт</h3>
            <div className="lg:grid grid-cols-[20%80%] gap-10 my-10">
              <aside className="mb-4 md:sticky md:mb-0">
                <ul className="flex justify-center space-x-4 text-sm text-left lg:flex-col lg:space-x-0 lg:space-y-2">
                  <li className="cursor-pointer" ref={myDetails}>
                    {/*"Icon"*/}
                    <button
                      onClick={() => changeCategory("account-details")}
                      type="button"
                      className="flex w-full h-full px-2 py-2 font-semibold"
                    >
                      Моите детайли
                    </button>
                  </li>
                  <li className="cursor-pointer" ref={myOrders}>
                    {/*"Icon"*/}
                    <button
                      onClick={() => changeCategory("my-orders")}
                      type="button"
                      className="flex w-full h-full px-2 py-2 font-semibold"
                    >
                      Направени поръчки
                    </button>
                  </li>
                  <li className="cursor-pointer" ref={mySettings}>
                    {/*"Icon"*/}
                    <button
                      onClick={() => changeCategory("account-settings")}
                      type="button"
                      className="flex w-full h-full px-2 py-2 font-semibold"
                    >
                      Настройки на акаунта
                    </button>
                  </li>
                </ul>
              </aside>
              <section className="bg-white border border-gray min-h-full">
                <div className="container lg:pt-10 lg:pl-10 ">
                  {categoryData}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
