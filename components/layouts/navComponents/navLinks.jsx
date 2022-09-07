// React and nextJs things
import React from "react";

// Components
import NavLinkMenu from "./NavLinkMenu";

import dictionary from "./navDictioinary/mainDictionary";

const NavLinks = ({ isHome }) => {
  return (
    <>
      <ul
        className={` text-bg-color text-lg inline-flex flex-col w-full h-full ${
          isHome ? "hidden lg:inline pt-2" : ""
        }`}
        data-columns="2"
      >
        {dictionary.map((section, index) => {
          return (
            <NavLinkMenu
              title={section.title}
              articles={section.articles}
              key={section.title + index}
              isHome={isHome}
            />
          );
        })}
      </ul>
    </>
  );
};

export default NavLinks;
