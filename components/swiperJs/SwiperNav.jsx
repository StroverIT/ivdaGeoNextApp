import React from 'react';
// Icons
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"
// Styles
import style from "../../styles/swiperJs/SwiperNav.module.css"

const SwiperNav = () => {
    return (
        <div className={`${style.swiperNav} z-10 cursor-pointer absolute flex w-full justify-between text-4xl`}>

        <div className={`${style.swiperPrev} flex items-center justify-center`}>
            <IoMdArrowDropleft/>
            </div>
        <div className={`${style.swiperNext} flex items-center justify-center`}>

            <IoMdArrowDropright/>
            </div>

        </div>
    );
}

export default SwiperNav;
