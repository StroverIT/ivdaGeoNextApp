import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// Test
// Nav Components
import Hamburger from "./navComponents/Hamburger";
import style from "../../styles/navigation/Nav.module.css";
// Icons and images
import { AiOutlineUser, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

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
              <div className="lg:flex items-center justify-between hidden">
                <Image
                  src="/images/logo.png"
                  width={250}
                  height={50}
                  className="cursor-pointer"
                />
              </div>
            </Link>
            <li className="flex items-center justify-center px-2 lg:hidden hover:text-white hover:bg-gray h-14 ">
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
          </div>
          <div className="lg:hidden">
            <Link href="/">
              <div className="flex items-center justify-between  lg:block">
                <Image
                  src="/images/logo.png"
                  width={210}
                  height={45}
                  className="cursor-pointer"
                />
              </div>
            </Link>
          </div>

          <ul className={`${style.list} flex items-center justify-center `}>
            {/* Search icon */}
            <li className="lg:flex  items-center justify-center px-4 h-14 lg:h-20 hidden hover:text-white hover:bg-gray ">
              <div className="text-3xl">
                <AiOutlineSearch className="icon" />
              </div>
              <div className="pl-1 text-sm font-extralight font-sans">
                Търси
              </div>
            </li>
            {/* Favourite items */}
            <Link href="/account/favourite">
              <li className="lg:flex flex-col items-center justify-center px-4 h-14 lg:h-20 hidden hover:text-white hover:bg-gray">
                <div className="text-3xl">
                  <AiOutlineHeart className="icon" />
                </div>
              </li>
            </Link>
            {/* Account */}
            <Link href="/account/login">
              <li className="flex flex-col items-center justify-center px-4 h-14 lg:h-20 hover:text-white hover:bg-gray">
                <div className="text-3xl">
                  <AiOutlineUser className="icon" />
                </div>
              </li>
            </Link>
            {/* Cart */}
            <Link href="/about">
              <li className="flex flex-col items-center justify-center px-4  h-14 lg:h-20 hover:text-white hover:bg-gray">
                <div className="text-3xl">
                  <BsCart3 className="icon" />
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
