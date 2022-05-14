import React, { useRef, useState } from "react";
// Next
import Image from "next/image"
import Link from "next/link"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "../../styles/swiperJs/SwiperPag.module.css"
import navStyle from "../../styles/swiperJs/SwiperNav.module.css"

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
// Components
import SwiperNav from "./SwiperNav"

export default function SwiperPag({images}) {
  return (
    <>
      <Swiper
        pagination={{
          el: `.${style.pagination}`,
          bulletActiveClass: `${style.paginationActive}`,
          clickable: true,
          // renderBullet: function (index, className) {
          //   return `<span class="${className} ${style.test}"> ${menu[index]}</span>`
          // },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
      }}
      navigation={{
        nextEl: `.${navStyle.swiperNext}`,
        prevEl: `.${navStyle.swiperPrev}`,
        disabledClass: `${navStyle.swiperDisabled}`
      }}
        modules={[Pagination, Navigation, Autoplay]}
        className={`mySwiper ${style.swiper}`}
      >
        <div className={`${style.paginationCont}`}>
          <div className={`${style.pagination}`}>

          </div>
        </div>

          {images.map(image=>{
        return (
        <SwiperSlide key={image.key}>
          <Link href={image.pageUrl}>
            <Image src={image.src}
            //  layout="fill"  
            height={600}
            width={1100}
             alt={image.key} 
             className={`${style.swiperSlideImg} cursor-pointer`}/>
          </Link>

        </SwiperSlide>
          )})}
        <SwiperNav/>
      </Swiper>
    </>
  );
}
