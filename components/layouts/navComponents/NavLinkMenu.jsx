import React, {useRef, useEffect, useState} from 'react';
import Link from "next/link"
import { useRouter } from 'next/router'
import classNames from "classnames"

// Styles
import style from "../../../styles/navigation/NavLinks.module.css"
// Tailwind conf
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
const lg = fullConfig.theme.screens.lg.min.split("px")[0]

const NavLinkMenu = ({title, articles,mainRoute}) => {

    const router = useRouter()

    const [hidden, setHidden] = useState(true)
    const [left, setLeft] = useState(`0px`)

    const menu = useRef(null)
    const subMenu = useRef(null)

    // Resizing bug fix
    useEffect(() => {
        function handleResize() {
        if(window.innerWidth >= lg){

            setHidden(true)
            setLeft( `${menu.offsetWidth}px`)
           
        }
    }
        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    })
    // On router change to hide the submenu
    useEffect(()=>{
        setHidden(true)

    }, [router.pathname])

    // Remove submenu spacing on click BELOW LG version
    function showMenu(e){
        
        if(window.innerWidth >= lg) return

        setHidden(false)
        setLeft(`0px`)

    }
    // Add submenu spacing on hover LG version
    function addSpacing(e){
        if(window.innerWidth < lg) return
      
        const parentEl = e.target.parentElement
        setLeft(`${parentEl.offsetWidth}px`)
    }

    const isHidden = classNames({
        "hidden": hidden,
    })

    return (
        <>
    <li className={` ${style.menu} ${style.menu}`} onClick={showMenu} onMouseOver={addSpacing} ref={menu}>{title}</li>
                <ul className={`${style.submenu} ${isHidden}`} ref={subMenu} style={{left}}>
                    {articles.map(article=>{
                        return (

                        <Link href={`/${mainRoute}/Add${article[1]}`} key={article[0]}> 
                    <li >
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
