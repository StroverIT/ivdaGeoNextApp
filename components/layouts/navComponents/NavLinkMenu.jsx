import React, {useRef, useEffect, useState} from 'react';
import Link from "next/link"
import { useRouter } from 'next/router'
import classNames from "classnames"
// Icons
import {AiOutlineArrowLeft} from "react-icons/ai"
// Components

// Styles
import style from "../../../styles/navigation/NavLinks.module.css"
// Tailwind conf
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
const lg = fullConfig.theme.screens.lg.min.split("px")[0]

const NavLinkMenu = ({title, articles,mainRoute}) => {

    const router = useRouter()
    
    const menu = useRef(null)
    const subMenu = useRef(null)
    
    const [left, setLeft] = useState(`0px`)
    const [xAnim, setXAnims] = useState(false)
    const [subIsHover, setSubIsHover] = useState(false)
    // Resizing bug fix
    useEffect(() => {
        function handleResize() {
        if(window.innerWidth >= lg){

            setXAnims(false)
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
        setXAnims(false)

    }, [router.pathname])

    // Remove submenu spacing on click BELOW LG version
    function showMenu(e){

        if(window.innerWidth >= lg) return
        // setHidden(false)
        setLeft(`0px`)
         setXAnims(true)
           
    }
    // Add submenu spacing on hover LG version
    function addSpacing(e){
        if(window.innerWidth < lg) return
      
        const parentEl = e.target.parentElement
        setLeft(`${parentEl.offsetWidth}px`)
    }
    function returnMenu(e){
     
        setXAnims(false)

    }
    function subHover(){
        if(window.innerWidth < lg) return

        setSubIsHover(true)
    }
    function subHoverOut(){
        if(window.innerWidth < lg) return

        setSubIsHover(false)

    }
   function bundle(e){
    addSpacing(e)
    subHover()
   }
    const isXAnim = classNames({
        [style.subOpen]:  xAnim
    })
    const isHover = classNames({
        [style.subHover]: subIsHover
    })
    return (
        <li className={`item w-full lg:w-64`}>
    <div className={` ${style.menu} ${isHover} lg:hover:text-dark lg:hover:bg-white px-3 py-1 flex w-full`} onClick={showMenu} onMouseOver={bundle} onMouseOut={subHoverOut} ref={menu}>{title}</div>
    <div className={`fixed lg:absolute lg:invisible py-2 overflow-auto  ${style.submenu} ${isXAnim} `} style={{left: left}} ref={subMenu} onMouseOver={subHover} onMouseOut={subHoverOut}>
                <ul className={`px-5 flex-wrap flex flex-initial`}>
                <li className={`flex items-center lg:hidden`}>
                    <span type="button" className={`${style.icon} flex py-2 px-2`}>
                    <AiOutlineArrowLeft onClick={returnMenu} className="icon text-xl"/>
                    </span>
                    <span className="pl-4">{title}</span>

                </li>
                    {articles.map(article=>{
                        return (

                        <Link href={`/${mainRoute}/Add${article[1]}`} key={article[0]}> 
                    <li  className="text-sm m-2">
                            <a href="#">{article[0]}</a>
                            </li>
                            </Link>
                        )
                    })}
                </ul>
    </div>

    </li>
    );
}

export default NavLinkMenu;
