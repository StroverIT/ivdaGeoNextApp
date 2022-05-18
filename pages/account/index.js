import React, { useState, useEffect } from "react";

// NextJs
import Head from "next/head";
import { useRouter } from "next/router";

// Account components
import MyDetails from "../../components/account/MyDetails";
import MyOrders from "../../components/account/MyOrders";
import AccountSettings from "../../components/account/AccountSettings";

const categoryComp = {
  "#account-details": <MyDetails />,
  "#my-orders": <MyOrders />,
  "#account-settings": <AccountSettings />,
};
export default function index() {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState(null);

  const changeCategory = (category) => {
    // Trigger fragment change to fetch the new data
    router.push(`/account/#${category}`, undefined, { shallow: true });
  };

  useEffect(() => {
    const someData =
      categoryComp[window.location.hash] ?? categoryComp["#account-details"]; // Retrieve data based on URL fragment
    setCategoryData(someData);
  }, [router]);

  return (
    <>
      <Head>
        <title>IvdaGeo my account</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>
      <main className="h-full pt-5 mb-auto bg-color">
        <div className="container items-start justify-center">
          <h3 className="text-3xl">Моят акаунт</h3>

          <div className="md:grid grid-cols-[20%80%] mt-10">
            <aside className="mb-4 md:sticky md:mb-0">
              <ul className="flex justify-center space-x-4 text-sm text-left md:flex-col md:space-x-0 md:space-y-2">
                <li className="cursor-pointer">
                  {/*"Icon"*/}
                  <button
                    onClick={() => changeCategory("account-details")}
                    type="button"
                  >
                    Моите детайли
                  </button>
                </li>

                <li className="cursor-pointer">
                  {/*"Icon"*/}
                  <button
                    onClick={() => changeCategory("my-orders")}
                    type="button"
                  >
                    Направени поръчки
                  </button>
                </li>
                <li className="cursor-pointer">
                  {/*"Icon"*/}
                  <button
                    onClick={() => changeCategory("account-settings")}
                    type="button"
                  >
                    Настройки на акаунта
                  </button>
                </li>
              </ul>
            </aside>
            <section className="bg-white border border-gray">
              <div className="container pt-10 pl-10 ">{categoryData}</div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
