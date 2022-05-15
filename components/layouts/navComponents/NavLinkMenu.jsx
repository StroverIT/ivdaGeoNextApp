import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
// Components

// Styles
import style from "../../../styles/navigation/NavLinks.module.css";
// Tailwind conf
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);
const lg = fullConfig.theme.screens.lg.min.split("px")[0];

const NavLinkMenu = ({ title, articles, mainRoute, isHome, isOpen }) => {
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

  return (
    <li className={`item w-full font-thin group ${!isHome ? "lg:w-64" : ""}`}>
      <div
        className={`bg-primary cursor-pointer lg:hover:text-dark lg:hover:bg-color px-3 py-1 flex w-full peer group-hover:lg:bg-color group-hover:lg:text-dark `}
        onClick={showMenu}
        ref={menu}
      >
        <div className={`${!isHome ? "max-lg:container" : ""}`}>{title}</div>
      </div>
      <div
        className={`fixed  lg:absolute py-2 overflow-auto  ${
          mobSubmenu ? "translate-x-0" : "translate-x-full"
        } transition-transform lg:transition-none lg:translate-x-0 lg:scale-0 h-full w-full left-0 top-0 lg:left-[256px] ${
          isHome ? "xl:left-[300px]" : ""
        } bg-color z-10 lg:hover:scale-100 text-dark peer-hover:lg:scale-100 lg:max-w-[750px]  xl:max-w-[925px]  ${isXAnim} `}
        ref={subMenu}
      >
        <ul className={`px-5  flex-wrap flex flex-initial`}>
          <li className={`flex items-center lg:hidden`}>
            <span
              type="button"
              className={`${style.icon} flex py-2 px-2`}
              onClick={() => setMobSubMenu(false)}
            >
              <AiOutlineArrowLeft className="text-xl icon" />
            </span>
            <span className="pl-4">{title}</span>
          </li>
          {articles.map((article) => {
            return (
              <Link href={`/${mainRoute}/Add${article[1]}`} key={article[0]}>
                <li className="m-2 text-sm">
                  <a href="#">{article[0]}</a>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default NavLinkMenu;
