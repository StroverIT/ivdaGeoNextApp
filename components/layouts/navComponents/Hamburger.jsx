// React and nextJs things
import React, {useState,useEffect, useRef} from 'react';
import { useRouter } from 'next/router'

// Styles
import styles from "../../../styles/navigation/Hamburger.module.css"
// Components
import NavLinks from "./NavLinks"

const Hamburger = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const hamburger = useRef(null)
  const navLinks = useRef(null)

  useEffect(()=>{
    if(open){
     hamburger.current.classList.add(styles.open)
     navLinks.current.classList.remove(styles.closed)

    }else{
      console.log("closed")
      hamburger.current.classList.remove(styles.open)
      navLinks.current.classList.add(styles.closed)

    }
  }, [open])
    return (
      <>
      <div className={`space-y-1 px-2 cursor-pointer ${styles.hamburger} ${router.route == "/" ?"md:hidden" : ""}`} onClick={()=> setOpen(!open)} ref={hamburger}>
      <div className="block w-5 h-0.5 bg-primary-lighter"></div>
      <div className="block w-5 h-0.5 bg-primary-lighter"></div>
      <div className="block w-3 h-0.5 bg-primary-lighter"></div>
    </div>
    <div className={`${styles.navLinks} ${styles.closed} test`} ref={navLinks}>
      <NavLinks />

    </div>
    </>
    );
}

export default Hamburger;
