import React from 'react';
import Link from "next/link"

// Nav Components
import Hamburger from "./navComponents/Hamburger"

const Navbar = () => {
  

    return (
        <nav className="bg-primary py-3 relative">
            <div className="container flex flex-center items-center">
            <Hamburger />
                <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                </ul>
            </div>
           
        </nav>
    );
}

export default Navbar;
