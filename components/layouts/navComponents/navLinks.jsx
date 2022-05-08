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
        articles: [
          ["Градински мебели", "/"],
        ],
        icon: "",
    }
]
const NavLinks = () => {


    return (
        <ul className="navigation" >
            {dictionary.map(article=>{
            return <NavLinkMenu title={article.title} articles={article.articles} key={article.title} mainRoute={article.mainRoute}/>
            })}
</ul>

    );
}

export default NavLinks;
