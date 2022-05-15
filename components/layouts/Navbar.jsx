import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

// Nav Components
import Hamburger from "./navComponents/Hamburger";
import style from "../../styles/navigation/Nav.module.css";
// Icons and images
import { AiOutlineUser } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";

const Navbar = () => {
  const headerRef = useRef(null);
  const [fixed, setFixed] = useState(false);
  const [show, setShow] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
    }
    if (lastScrollY > 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`z-50 animate ${fixed ? "fixed w-full" : ""} ${
        !show && fixed ? "animateUp" : ""
      }`}
      ref={headerRef}
    >
      <nav className={`flex bg-color ${style.cShadow}`}>
        <div className="container relative flex items-center justify-between ">
          <div className="flex items-center logo">
            <Hamburger headRef={headerRef} />
            <Link href="/">
              <div className="flex items-center justify-between hidden lg:block">
                <Image
                  src="/images/logo.png"
                  width={250}
                  height={50}
                  className="cursor-pointer"
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center hidden md:block">
            <div className="flex rounded">
              <input
                type="text"
                className="px-4 py-2 bg-transparent border rounded-full w-80 border-green placeholder-dark focus:outline-green"
                placeholder="Търси..."
              />
              <button className="flex items-center justify-center px-4 ml-2 text-white rounded-full bg-green">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </div>
          <ul className={`${style.list} flex items-center justify-center `}>
            {/* Home icon */}
            <Link href="/">
              <li className="flex flex-col items-center justify-center px-4 lg:hidden h-14 lg:h-20">
                <div className="text-3xl">
                  <BiHomeAlt className="icon" />
                </div>
              </li>
            </Link>
            {/* Search icon for mobile */}
            <li className="flex items-center justify-center px-4 md:hidden text-green">
              <button>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </li>
            {/* Account */}
            <Link href="/account/login">
              <li className="flex flex-col items-center justify-center px-4 text-blue hover:bg-blue hover:text-white h-14 lg:h-20">
                <div className="text-3xl">
                  <AiOutlineUser className="icon" />
                </div>
                <div className={`text-sm hidden lg:block`}>Вход</div>
              </li>
            </Link>
            {/* Cart */}
            <Link href="/about">
              <li className="flex flex-col items-center justify-center px-4 text-orange hover:bg-orange hover:text-white h-14 lg:h-20">
                <div className="text-3xl">
                  <BsCart3 className="icon" />
                </div>
                <div className={`text-sm hidden lg:block`}>Количка</div>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
