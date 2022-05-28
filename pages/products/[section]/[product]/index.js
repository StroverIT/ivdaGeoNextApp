import React from "react";

// Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// Components
import ThumbsGallery from "../../../../components/swiperJs/ThumbsGallery";
import Pricing from "../../../../components/priceStyling/Pricing";
import BuyBtn from "../../../../components/base/BuyBtn";

export default function index() {
  return (
    <main className="mb-auto">
      <div className="container">
        <ThumbsGallery />
        <section className="">
          <section className="flex items-center justify-between border-b border-gray">
            <div>Цена:</div>
            <div>
              <Pricing price={220} priceDec={22} />
            </div>
          </section>
          <section className="flex justify-between">
            <div className="flex items-center">
              <div>
                <button
                  type="button"
                  className="p-1 text-white rounded-full bg-primary"
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <input
                type="number"
                className="w-1/3 mx-2 text-center border rounded-full border-primary"
                defaultValue="1"
              />
              <div>
                <button
                  type="button"
                  className="p-1 text-white rounded-full bg-primary"
                >
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
            <BuyBtn lg={true} />
          </section>
        </section>
      </div>
    </main>
  );
}
