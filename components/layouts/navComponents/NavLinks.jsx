// React and nextJs things
import React from "react";

// Dictionary
import dictionary from "./navDictioinary/mainDictionary";

// Components
import NavLinkMenu from "./NavLinkMenu";

import LinkComp from "./LinkComp";

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
          return section.articles ? (
            <NavLinkMenu
              title={section.title}
              articles={section.articles}
              key={section.title + index}
              isHome={isHome}
            />
          ) : (
            <div key={section.title + index} className="pl-3">
              <LinkComp
                route={section.title}
                mainRoute={section.title}
                isHome={isHome}
                className="text-dark "
              />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default NavLinks;
