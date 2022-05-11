import React, { useRef, useState } from "react";
import Image from "next/image"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "../../styles/swiperJs/SwiperPag.module.css"

// import required modules
import { Pagination, Navigation } from "swiper";

export default function SwiperPag({images}) {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper`}
      >
          {images.map(image=>{
              console.log(image.src);
        return (
        <SwiperSlide key={image.key}>
            <Image src={image.src}
            //  layout="fill" 
            height={750}
            width={1100}
             alt={image.key} 
             className={`${style.swiperSlideImg}`}/>
        </SwiperSlide>
          )})}

      </Swiper>
    </>
  );
}
