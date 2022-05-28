import React from "react";

// Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// Components
import ThumbsGallery from "../../../../components/swiperJs/ThumbsGallery";
import Pricing from "../../../../components/priceStyling/Pricing";

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
          <section>
            <div className="flex items-center">
              <div>
                <button
                  type="button"
                  className="p-1 text-lg text-white rounded-full bg-primary"
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="number"
                  className="w-2/3 text-center border rounded-full border-primary placeholder:text-lg placeholder:font-bold"
                  placeholder="1"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="p-1 text-lg text-white rounded-full bg-primary"
                >
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
