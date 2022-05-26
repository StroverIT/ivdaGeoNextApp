import React from "react";

// Styles
import styles from "../../styles/products/listProducts.module.css";

// NextJs
import { useRouter } from "next/router";

// Components
import Checkbox from "../../components/base/Checkbox";
import AsideHeader from "../../components/products/aside/AsideHeader";
import Product from "../../components/products/listProducts/Product";

export default function section() {
  const router = useRouter();
  const { section } = router.query;

  return (
    <main className="mb-auto">
      <div className="lg:grid grid-cols-[20%80%] space-x-10 container">
        <aside
          className={`hidden w-full h-full lg:block bg-[#f5f5f5] ${styles.asideContainer} relative pt-4`}
        >
          <div className="">
            <h3 className="mb-3 text-2xl text-semibold">Филтри</h3>
            <AsideHeader text="Цена" />
            <div>
              <div>
                <span>169.99 лв.</span>
                <span>1 499.99 лв.</span>
              </div>
              {/* Pricing line to choose */}
              <div>
                <span>{/* Icon */}</span>
                <span>Изчисти</span>
              </div>
            </div>
            <div>
              <AsideHeader text="Марка" />

              <Checkbox text="BLACK&DECKER" id="blackAndDecker" quantity={2} />
            </div>
            <div>
              <AsideHeader text="Напрежение" />

              <Checkbox text="10.80 V" id="10.80V" quantity={100} />
            </div>
          </div>
        </aside>
        <section>
          <div className="grid grid-cols-2 gap-2 lg:hidden">
            {/* TODO: add icons */}
            <button
              type="button"
              className="w-full h-full py-2 pl-4 text-left text-white bg-primary"
            >
              Филтри
            </button>
            <button
              type="button"
              className="w-full h-full py-2 pl-4 text-left border border-gray"
            >
              Сортирай по:
            </button>
          </div>
          <Product section={section} />
          <Product section={section} />
          <Product section={section} />
        </section>
      </div>
    </main>
  );
}
