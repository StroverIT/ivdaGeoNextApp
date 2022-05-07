import React from 'react';
import Link from "next/link"

const Navbar = () => {

    return (
        <nav className="bg-primary">
            <div className="container">

            <ul>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            </ul>
            </div>
           
        </nav>
    );
}

export default Navbar;
