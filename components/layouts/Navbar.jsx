import React,{useRef} from 'react';
import Link from "next/link"
import Image from 'next/image'

// Nav Components
import Hamburger from "./navComponents/Hamburger"
import style from "../../styles/navigation/Nav.module.css"
// Icons and images
import {AiOutlineUser} from "react-icons/ai"
import {BsCart3} from "react-icons/bs"
import {BiHomeAlt} from "react-icons/bi"

const Navbar = () => {
    const headerRef = useRef(null)
    return (
        <header className={`z-50 `} ref={headerRef}>

        <nav className={`flex bg-color ${style.cShadow}`}>
            <div className="flex items-center justify-between container relative bg-color">
             

                    <div className="logo flex items-center">
                    <Hamburger headRef={headerRef}/>
                    <div className="flex items-center justify-between hidden lg:block">
                    <Image  src="/images/logo.png" width={250} height={50}/>

                    </div>
                    </div>

            <div className="flex items-center justify-center hidden md:block">
                <div className="flex rounded">
                    <input type="text" className="px-4 py-2 w-80" placeholder="Search..."/>
                    <button className="flex items-center justify-center px-4 ">
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                </div>
            </div>
                <ul className={`${style.list} flex items-center justify-center `}>
              
                    
                <Link href="/">
                <li className="flex flex-col items-center justify-center px-4 lg:hidden h-14 lg:h-20">
                        <div className="text-3xl"><BiHomeAlt className="icon"/></div>
                    </li>
                    </Link>
                    <li className="flex items-center justify-center md:hidden px-4 text-green">
                    <button >
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                    </li>
                <Link href="/">
                <li className="flex flex-col items-center justify-center px-4 text-blue hover:bg-blue hover:text-white h-14 lg:h-20">
                        <div className="text-3xl"><AiOutlineUser className="icon"/></div>
                        <div className={`text-sm hidden lg:block`}>Вход</div>
                    </li>
                    </Link>

                <Link href="/about">
                <li className="flex flex-col items-center justify-center px-4 text-orange hover:bg-orange hover:text-white h-14 lg:h-20">
                        <div className="text-3xl"><BsCart3 className="icon"/></div>
                        <div className={`text-sm hidden lg:block`}>Количка</div>
                    </li>
                    </Link>
                </ul>
                </div>
           
        </nav>
        </header>

    );
}

export default Navbar;
