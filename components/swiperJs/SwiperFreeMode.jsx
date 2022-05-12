import React, { useRef, useState } from "react";
import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Custom styles
import style from "../../styles/swiperJs/SwiperFreeMode.module.css"
// import required modules
import { FreeMode, Pagination } from "swiper";

export default function SwiperFreeMode({images}) {
   
  return (
    <>
     <div className="swipebody">
      <Swiper
        
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
            el: `.${style.pagination}`,
          clickable: true,
           
        }}
        breakpoints={{
            // when window width is >= 640px
            0:{
                slidesPerView: 1.25
            },
            640: {

              slidesPerView: 2.25,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2.5,
            },
          }}
        modules={[FreeMode, Pagination]}
        className={`mySwiper`}
      >

         {images.map(image=>{
        return (
        <SwiperSlide key={image.key}>
            <Image src={image.src}
            //  layout="fill"  
            height={600}
            width={1100}
             alt={image.key} 
            />
        </SwiperSlide>
          )})}
          <div className={`${style.pagination} flex justify-center gap-2 my-2`}></div>
      </Swiper>
      </div>
    </>
  );
}
