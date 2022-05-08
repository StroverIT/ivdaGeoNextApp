import React from 'react';

// Styles
import style from "../../../styles/navigation/NavLinks.module.css"

const NavLinkMenu = ({title, articles}) => {
    return (
        <>
    <li className={` ${style.menu} ${style.menu}`}>{title}</li>
                <ul className={`${style.submenu} hidden`}>
                    {articles.map(article=>{
                        return <li key={article}><a href="">{article}</a></li>

                    })}
                </ul>
    </>
    );
}

export default NavLinkMenu;
