import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/login'}>Login</Link></li>
                            <li><Link href={'/register'}>Register</Link></li>
                            <li><Link href={'/admin/dashboard'}>Admin</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
