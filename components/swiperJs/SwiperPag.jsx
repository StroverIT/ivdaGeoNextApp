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
import { Pagination, Navigation, Autoplay } from "swiper";

export default function SwiperPag({images}) {
  return (
    <>
      <Swiper
        pagination={{
          type: "bullets",
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
      }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className={`mySwiper ${style.swiper}`}
      >
          {images.map(image=>{
        return (
        <SwiperSlide key={image.key}>
            <Image src={image.src}
            //  layout="fill"  
            height={600}
            width={1100}
             alt={image.key} 
             className={`${style.swiperSlideImg}`}/>
        </SwiperSlide>
          )})}

      </Swiper>
    </>
  );
}
