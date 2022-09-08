// React and nextJs things
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

// Styles
import styles from "../../../styles/navigation/Hamburger.module.css";
// Components
import NavLinks from "./navLinks";

const Hamburger = ({ headRef, menuConctactsRef }) => {
  const router = useRouter();

  const hamburger = useRef(null);
  const navLinks = useRef(null);
  const [isOpen, menuState] = useState(false);

  useEffect(() => {
    menuState(false);
  }, [router]);

  useEffect(() => {
    let widWidth = window.innerWidth;
    if (isOpen) {
      hamburger.current.classList.add(styles.open);
      navLinks.current.classList.add(styles.menuOpen);
      console.log(
        headRef.current.offsetHeight,
        menuConctactsRef.current.offsetHeight,
        widWidth
      );
      let top = `${headRef.current.offsetHeight}px`;
      if (widWidth > 1024) {
        top = `${
          headRef.current.offsetHeight - menuConctactsRef.current.offsetHeight
        }px`;
      }
      navLinks.current.style.top = top;

      document.body.classList.add("blury");
    }
    if (!isOpen) {
      hamburger.current.classList.remove(styles.open);
      navLinks.current.classList.remove(styles.menuOpen);
      document.body.classList.remove("blury");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headRef, isOpen]);
  return (
    <>
      <div
        className={`px-2 cursor-pointer mt-1 lg:mt-1 flex gap-x-2`}
        onClick={() => menuState(!isOpen)}
      >
        <div className={` ${styles.hamburger}`} ref={hamburger}>
          <div className="block w-6 h-[1px] md:w-6 md:h-[2px] bg-dark "></div>
          <div className="block w-6 h-[1px] md:w-6 md:h-[2px] bg-dark"></div>
          <div className="block w-3 h-[1px] md:w-3 md:h-[2px] bg-dark"></div>
        </div>
        <div className="hidden text-sm lg:block">Категории</div>
      </div>
      <div
        className={`w-full lg:w-auto hover:lg:w-full fixed lg:absolute -z-20 bg-white pt-3 pb-10 ${
          styles.navLinks
        } ${router.route == "/" ? "lg:hidden" : ""} `}
        ref={navLinks}
      >
        <NavLinks />
      </div>
      <div
        className={`blury-bg -z-30 ${!isOpen ? "hidden" : ""}`}
        onClick={() => menuState(false)}
      ></div>
    </>
  );
};

export default Hamburger;
