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
  const searchMenu = useRef(null);

  const [show, setShow] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [showSearch, setShowSearch] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(true);
    } else {
      setShow(false);
    }

    const bottom =
      document.body.clientHeight - window.innerHeight <=
      Math.ceil(lastScrollY + 20);
    if (bottom) {
      console.log("BOTTOM!");
      setShow(false);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
    }

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`z-50 animate sticky top-0  ${show ? "animateUp" : ""}`}
      ref={headerRef}
    >
      <nav className={`flex bg-color ${style.cShadow}`}>
        <div className="container relative flex items-center justify-between ">
          <div className="flex items-center justify-center logo">
            <Hamburger headRef={headerRef} />
            <Link href="/">
              <div className="items-center justify-between hidden lg:flex">
                <Image
                  src="/images/logo.png"
                  width={250}
                  height={50}
                  className="cursor-pointer"
                />
              </div>
            </Link>
            <li
              className="flex items-center justify-center px-2 cursor-pointer lg:hidden hover:text-white hover:bg-gray h-14"
              onClick={() => setShowSearch(!showSearch)}
            >
              <button type="button" className="w-full h-full">
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
              <div className="flex items-center justify-between lg:block">
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
            <li
              className="items-center justify-center hidden px-4 lg:flex h-14 lg:h-20 hover:bg-gray "
              onClick={() => setShowSearch(!showSearch)}
            >
              <div className="text-3xl">
                <AiOutlineSearch className="icon" />
              </div>
              <div className="pl-1 font-sans text-sm font-extralight">
                Търси
              </div>
            </li>
            {/* Favourite items */}
            <Link href="/account#my-favourites">
              <li className="flex-col items-center justify-center hidden px-4 lg:flex h-14 lg:h-20 hover:text-white hover:bg-gray">
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
            <Link href="/cart">
              <li className="flex flex-col items-center justify-center px-4 h-14 lg:h-20 hover:text-white hover:bg-gray">
                <div className="text-3xl">
                  <BsCart3 className="icon" />
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      {/* Search menu */}
      <div
        className={`relative w-full -translate-y-5   animateSearch -z-10 ${
          showSearch ? "showSearch" : ""
        }`}
        ref={searchMenu}
      >
        <div className="container relative py-2">
          <input
            type="text"
            placeholder="Търсене ..."
            className="w-full py-2 pl-3 border-2 rounded-full border-primary focus:outline-none placeholder:text-gray-250"
          />
          <div className="absolute text-2xl font-semibold -translate-y-1/2 cursor-pointer text-primary right-3 top-1/2 ">
            <AiOutlineSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
