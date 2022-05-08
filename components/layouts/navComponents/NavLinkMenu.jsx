import React from 'react';
import Link from "next/link"

// Styles
import style from "../../../styles/navigation/NavLinks.module.css"

const NavLinkMenu = ({title, articles,mainRoute}) => {
    return (
        <>
    <li className={` ${style.menu} ${style.menu}`}>{title}</li>
                <ul className={`${style.submenu} hidden`}>
                    {articles.map(article=>{
                        console.log(`/${mainRoute}/.${article[1]}`);
                        return (
                        <Link href={`/${mainRoute}/Add${article[1]}`} key={article[0]}> 
                        <li>
                            <a href="#">{article[0]}</a>
                            </li>
                            </Link>
                        )
                    })}
                </ul>
    </>
    );
}

export default NavLinkMenu;
