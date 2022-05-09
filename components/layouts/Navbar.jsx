import React,{useRef} from 'react';
import Link from "next/link"

// Nav Components
import Hamburger from "./navComponents/Hamburger"
import style from "../../styles/navigation/Nav.module.css"
const Navbar = () => {
    const headerRef = useRef(null)
    return (
        <header className={`bg-primary z-50 `} ref={headerRef}>

        <nav className={`flex flex-center items-center bg-primary ${style.cShadow}`}>
            <div className="flex items-center container relative py-3">

            <Hamburger headRef={headerRef}/>
                <ul >
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                </ul>
           
            </div>
        </nav>
        </header>

    );
}

export default Navbar;
