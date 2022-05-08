import React from 'react';
import Link from "next/link"

// Styles
import style from "../../../styles/navigation/NavLinks.module.css"

const NavLinkMenu = ({title, articles}) => {
    return (
        <>
    <li className={` ${style.menu} ${style.menu}`}>{title}</li>
                <ul className={`${style.submenu} hidden`}>
                    {articles.map(article=>{
                        return (
                        <Link href="/"> 
                        <li key={article}>
                            <a href="">{article}</a>
                            </li>
                            </Link>
                        )
                    })}
                </ul>
    </>
    );
}

export default NavLinkMenu;
