import React from 'react';
import Link from "next/link"

const Navbar = () => {

    return (
        <nav>
            <ul>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            </ul>
           
        </nav>
    );
}

export default Navbar;
