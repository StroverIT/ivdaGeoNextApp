import React from 'react';
import {IoMdArrowDropright} from "react-icons/io"

import style from "../../styles/swiperJs/SwiperNav.module.css"

const SwiperNav = () => {
    return (
        <div className={`${style.swiperNav} z-10 cursor-pointer absolute flex w-full justify-between`}>

        <div className={`${style.swiperPrev} flex items-center justify-center`}><IoMdArrowDropright/></div>
        <div className={`${style.swiperNext} flex items-center justify-center`}><IoMdArrowDropright/></div>
        </div>
    );
}

export default SwiperNav;
