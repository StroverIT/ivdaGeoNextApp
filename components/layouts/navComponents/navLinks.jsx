// React and nextJs things
import React from 'react';

// Styles
// Components
import NavLinkMenu from "./NavLinkMenu"

const dictionary = [
     {
        title: "Интрументи и железария",
        mainRoute: "toolsAndHardware",
        articles: [
            [ "Акумулаторни комплекти", "/"],
        ],
        icon: "",
    },
    {
        title: "Градина",
        mainRoute: "garden",
        articles: [
          ["Градински мебели", "/"],
        ],
        icon: "",
    },
    {
        title: "Кухня",
        mainRoute: "kitchen",
        articles: [
          ["Кухненски мебели", "/"],
        ],
        icon: "",
    }
]
const NavLinks = ({isHome}) => {


    return (
        <ul className={`navigation text-bg-color text-lg ${isHome ? "hidden lg:block" : ""}`}>
            {dictionary.map(article=>{
            return <NavLinkMenu title={article.title} articles={article.articles} key={article.title} mainRoute={article.mainRoute} isHome={isHome}/>
            })}
</ul>

    );
}

export default NavLinks;
