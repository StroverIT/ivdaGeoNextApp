import React, { useState, useEffect } from "react";

// NextJs
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Input from "../../components/form/Input";
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
      <main className="pt-5 mb-auto bg-color h-full">
        <div className="container justify-center">
          <h3 className="text-3xl">Моят акаунт</h3>

          <div className="grid grid-cols-[20%80%]">
            <aside className="sticky">
              <ul>
                <li className="cursor-pointer">
                  {/*"Icon"*/}
                  <button onClick={() => changeCategory("account-details")}>
                    Моите детайли
                  </button>
                </li>

                <li className="cursor-pointer">
                  {/*"Icon"*/}
                  <button onClick={() => changeCategory("my-orders")}>
                    Направени поръчки
                  </button>
                </li>
                <li className="cursor-pointer">
                  {/*"Icon"*/}
                  <button onClick={() => changeCategory("account-settings")}>
                    Настройки на акаунта
                  </button>
                </li>
              </ul>
            </aside>
            <section className="bg-white">
              <div className="container">{categoryData}</div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
