import React from 'react';
import Link from "next/link"

// Styles
import style from "../../../styles/navigation/NavLinks.module.css"

const NavLinkMenu = ({title, articles,mainRoute}) => {
    function showMenu(e){
        const siblingEl = e.target.nextElementSibling
        siblingEl.classList.remove("hidden")
    }
    function addSpacing(e){
        const parentEl = e.target.parentElement
       parentEl.offsetWidth
        const siblingEl = e.target.nextElementSibling
        siblingEl.style.left= `${parentEl.offsetWidth}px`
    }
    return (
        <>
    <li className={` ${style.menu} ${style.menu}`} onClick={showMenu} onMouseOver={addSpacing}>{title}</li>
                <ul className={`${style.submenu} hidden`}>
                    {articles.map(article=>{
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
