// React and nextJs things
import React, {useState,useEffect, useRef} from 'react';
import { useRouter } from 'next/router'

// Styles
import styles from "../../../styles/navigation/Hamburger.module.css"
// Components
import NavLinks from "./NavLinks"

const Hamburger = ({headRef}) => {
  const router = useRouter()

  const [isOpen, menuState] = useState(false)
  const hamburger = useRef(null)
  const navLinks = useRef(null)

  useEffect(()=>{
    menuState(false)
  }, [ router.pathname])

  useEffect(()=>{
    if(isOpen){
     hamburger.current.classList.add(styles.open)
     navLinks.current.classList.add(styles.menuOpen)
     navLinks.current.style.top = `${headRef.current.offsetHeight}px` 
    }
    if(!isOpen){
      hamburger.current.classList.remove(styles.open)
      navLinks.current.classList.remove(styles.menuOpen)
    }
    
  }, [isOpen])
    return (
      <>
      <div className={`space-y-1 px-2 cursor-pointer ${styles.hamburger} ${router.route == "/" ?"md:hidden" : ""}`} onClick={()=> menuState(!isOpen)} ref={hamburger}>
      <div className="block w-5 h-0.5 bg-primary-lighter"></div>
      <div className="block w-5 h-0.5 bg-primary-lighter"></div>
      <div className="block w-3 h-0.5 bg-primary-lighter"></div>
    </div>
    <div className={`w-full fixed lg:absolute lg:w-auto -z-20 ${styles.navLinks} ${router.route == "/" ?"md:hidden" : ""} `} ref={navLinks}>
      <NavLinks />
    </div>
    </>
    );
}

export default Hamburger;
