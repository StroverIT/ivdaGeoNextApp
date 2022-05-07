import React,{useRef} from 'react';
import Link from "next/link"

// Nav Components
import Hamburger from "./navComponents/Hamburger"

const Navbar = () => {
    const headerRef = useRef(null)
    return (
        <header className="bg-primary z-50" ref={headerRef}>

        <nav className="container flex flex-center items-center relative bg-primary py-3">
            <Hamburger headRef={headerRef}/>
                <ul >
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                </ul>
           
        </nav>
        </header>

    );
}

export default Navbar;
