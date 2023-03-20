import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className='navbar'>
                    <div className="logo"><a href="/">Santosh</a></div>
                    <ul className='menu'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
