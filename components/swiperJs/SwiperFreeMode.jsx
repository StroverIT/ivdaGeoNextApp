import React, { useRef, useState } from "react";
// NextJs
import Link from "next/link"
import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Custom styles
import style from "../../styles/swiperJs/SwiperFreeMode.module.css"
import navStyle from "../../styles/swiperJs/SwiperNav.module.css"
// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
// Components
import Pricing from "../priceStyling/Pricing"
import SwiperNav from "./SwiperNav"
export default function SwiperFreeMode({images}) {
  
  return (
    <>
     <div className="flex flex-row items-stretch py-5 swipebody">
      <Swiper
        
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        navigation={{
          nextEl: `.${navStyle.swiperNext}`,
          prevEl: `.${navStyle.swiperPrev}`,
          disabledClass: `${navStyle.swiperDisabled}`
        }}
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
              slidesPerView: 3.5,
            },
          }}
        modules={[FreeMode, Pagination, Navigation]}
        className={`mySwiper relative`}
      >

         {images.map(image=>{
           let [price, priceDec] = image.price.toFixed(2).split(".")
        return (
        <SwiperSlide key={image.title} className="flex flex-col h-full bg-white">
             <Link href={image.pageUrl} >
               <>
            <Image src={image.src}
            //  layout="fill"  
            height={700}
            width={1000}
            alt={image.title} 
            className="cursor-pointer"
            />
            </>
        </Link>

            <div className="container py-2 font-medium text-center border-t border-gray">
              {image.title}
              </div>
            
              <Pricing isPromo={image.isPromo} price={price} priceDec={priceDec} pageUrl={image.pageUrl}/>
        </SwiperSlide>
          )})}
         {/* Nav */}
         <SwiperNav />
        </Swiper>
      </div>
      <div className={`${style.pagination} z-10 flex justify-center gap-2 my-2`}></div>

    </>
  );
}
