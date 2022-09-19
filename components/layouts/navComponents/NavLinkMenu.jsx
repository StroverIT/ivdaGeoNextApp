import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
// Components

// Styles
import style from "../../../styles/navigation/NavLinks.module.css";
// Getted from tailwind config

const lg = "1024";

import NavLinkSubMenu from "./NavLinkSubMenu";
import LinkComp from "./LinkComp";
// Icons
import { BiRightArrow } from "react-icons/bi";

const NavLinkMenu = ({ title, articles, isHome }) => {
  const router = useRouter();

  const menu = useRef(null);
  const subMenu = useRef(null);

  const [xAnim, setXAnims] = useState(false);
  const [mobSubmenu, setMobSubMenu] = useState(false);
  // Resizing bug fix
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= lg) {
        setXAnims(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  // On router change to hide the submenu
  useEffect(() => {
    setMobSubMenu(false);
  }, [router.pathname]);

  // Remove submenu spacing on click BELOW LG version
  function showMenu(e) {
    if (window.innerWidth >= lg) return;
    setXAnims(true);
    setMobSubMenu(true);
  }

  const isXAnim = classNames({
    [style.subOpen]: xAnim,
  });
  const menuClasses = `bg-white cursor-pointer text-dark lg:hover:text-dark lg:hover:bg-color ${
    !isHome ? "" : ""
  }  flex w-full peer group-hover:lg:bg-color group-hover:lg:text-primary font-normal font-sans text-lg `;
  return (
    <li className={`item w-full  group  ${!isHome ? "lg:w-64 mt-2" : ""}`}>
      {/* Menu */}
      <div
        className={title.length > 0 ? menuClasses : ""}
        onClick={showMenu}
        ref={menu}
      >
        <div
          className={`flex items-center group py-1 ${
            !isHome ? "max-lg:container" : ""
          }`}
        >
          {title}
          <span className="pl-2 text-sm transition-transform text-primary-lighter group-hover:rotate-90">
            <BiRightArrow />
          </span>
        </div>
      </div>
      {/* Submenu */}
      <div
        className={`fixed  lg:absolute pt-5 overflow-auto  py-10 px-2 ${
          mobSubmenu ? "translate-x-0" : "translate-x-full"
        } transition-transform lg:transition-none lg:translate-x-0 lg:scale-0 h-full w-full  top-0  bg-color  ${
          isHome ? "right-0 w-[1040px]" : "lg:right-[0px] xl:right-[0]"
        } lg:hover:scale-100 text-dark peer-hover:lg:scale-100 lg:max-w-[780px]  xl:max-w-[1050px]  ${isXAnim} `}
        ref={subMenu}
      >
        <div className={` flex items-center ml-4 md:ml-2`}>
          <div
            type="button"
            className={`${style.icon} flex py-2 px-2 lg:hidden`}
            onClick={() => setMobSubMenu(false)}
          >
            <AiOutlineArrowLeft className="text-xl icon" />
          </div>
          <div className="pl-4 font-semibold">{title}</div>
        </div>
        {/* submenu list */}
        <ul className={`pl-6 mt-2  `}>
          {articles &&
            articles.map((article) => {
              return (
                <LinkComp
                  route={article}
                  mainRoute={title}
                  isHome={isHome}
                  key={article}
                />
              );
            })}
        </ul>
      </div>
    </li>
  );
};

export default NavLinkMenu;
