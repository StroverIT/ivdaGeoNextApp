import React, {useRef} from 'react';
import Link from "next/link"

// Styles
import style from "../../../styles/navigation/NavLinks.module.css"
// Tailwind conf
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
const lg = fullConfig.theme.screens.lg.min.split("px")[0]

const NavLinkMenu = ({title, articles,mainRoute}) => {
    
    const menu = useRef(null)
    const subMenu = useRef(null)
    React.useEffect(() => {
        function handleResize() {
        //   console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        if(window.innerWidth >= lg){
            subMenu.current.classList.add("hidden")
            subMenu.current.style.left= `${menu.offsetWidth}px`
        }
    }
    
        window.addEventListener('resize', handleResize)
      })
    function showMenu(e){
        if(window.innerWidth >= lg) return

        const siblingEl = e.target.nextElementSibling
        siblingEl.classList.remove("hidden")
        siblingEl.style.left= `0px`

    }
    function addSpacing(e){
        if(window.innerWidth < lg) return
      
            const parentEl = e.target.parentElement
            parentEl.offsetWidth
             const siblingEl = e.target.nextElementSibling
             siblingEl.style.left= `${parentEl.offsetWidth}px`
    }

    return (
        <>
    <li className={` ${style.menu} ${style.menu}`} onClick={showMenu} onMouseOver={addSpacing} ref={menu}>{title}</li>
                <ul className={`${style.submenu} hidden`} ref={subMenu}>
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
