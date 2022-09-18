import React, { useRef, useState } from "react";
// NextJs
import { useRouter } from "next/router";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Custom styles
import style from "../../styles/swiperJs/SwiperFreeMode.module.css";
import navStyle from "../../styles/swiperJs/SwiperNav.module.css";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

// Components
import PricingPromo from "../priceStyling/PricingPromo";
import SwiperNav from "./SwiperNav";
// Utils

import { translationToRoute } from "../../utils/translationToRoute";

export default function SwiperFreeMode({ data, navSize }) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-row items-stretch swipebody">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          navigation={{
            nextEl: `.${navStyle.swiperNext}`,
            prevEl: `.${navStyle.swiperPrev}`,
            disabledClass: `${navStyle.swiperDisabled}`,
          }}
          pagination={{
            el: `.${style.pagination}`,
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2.25,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className={`mySwiper relative freeModeSwiper`}
        >
          {data &&
            data.slice(0, 10)?.map((item) => {
              return (
                <SwiperSlide
                  className="flex flex-col bg-white shadow-lg cursor-pointer hover:shadow-xl "
                  key={item.title}
                >
                  <div
                    onClick={() => router.push(item.route)}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="relative w-full h-96">
                        <Image
                          src={`/uploads/${item.imageUrl}`}
                          layout="fill"
                          alt={item.sectionName}
                          className="object-contain"
                        />
                      </div>
                      <div className="container pt-4 font-medium text-center border-t border-gray">
                        {item.sectionName}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          {/* Nav */}
          <SwiperNav size={navSize} />
          <div
            className={`${style.pagination} z-10 flex justify-center gap-2 mt-5`}
          ></div>
        </Swiper>
      </div>
    </>
  );
}
