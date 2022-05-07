import React, {useState,useEffect, useRef} from 'react';
import { useRouter } from 'next/router'

import styles from "../../../styles/Hamburger.module.css"

const Hamburger = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const hamburger = useRef(null)

  useEffect(()=>{
    if(open){
     hamburger.current.classList.add(styles.open)
    }else{
      console.log("closed")
     hamburger.current.classList.remove(styles.open)

    }
  }, [open])
    return (
      <div className={`space-y-1 px-2 cursor-pointer ${styles.hamburger} ${router.route == "/" ?"md:hidden" : ""}`} onClick={()=> setOpen(!open)} ref={hamburger}>
      <div className="block w-5 h-0.5 bg-primary-lighter"></div>
      <div className="block w-5 h-0.5 bg-primary-lighter"></div>
      <div className="block w-3 h-0.5 bg-primary-lighter"></div>
    </div>
    );
}

export default Hamburger;
