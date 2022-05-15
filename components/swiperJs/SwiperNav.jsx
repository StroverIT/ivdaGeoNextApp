import React from "react";
// Icons
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
// Styles
import style from "../../styles/swiperJs/SwiperNav.module.css";

const SwiperNav = () => {
  return (
    <div className={`${style.swiperNav} z-10 text-4xl`}>
      <div
        className={`${style.swiperPrev} flex items-center justify-center cursor-pointer absolute z-10 select-none`}
      >
        <IoMdArrowDropleft />
      </div>
      <div
        className={`${style.swiperNext} flex items-center justify-center cursor-pointer absolute z-10 select-none`}
      >
        <IoMdArrowDropright />
      </div>
    </div>
  );
};

export default SwiperNav;
