// React and nextJs things
import React from 'react';
import Link from "next/link"

// Styles
// Components
import NavLinkMenu from "./NavLinkMenu"

const dictionary = [
     {
        title: "Интрументи и железария",
        articles: [
            "Акумулаторни комплекти",
            "Test"
        ],
        icon: "",
    },
    {
        title: "Градина",
        articles: [
            "Градински мебели",
        ],
        icon: "",
    }
]
const NavLinks = () => {


    return (
        <ul className="navigation" >
            {dictionary.map(article=>{
            return <NavLinkMenu title={article.title} articles={article.articles} key={article.title}/>
            })}
</ul>

    );
}

export default NavLinks;
