import React from 'react'
import { IconContext } from 'react-icons'
import { FcGlobe } from 'react-icons/fc'
import './Navbar.scss'

const Navbar = () => {
    return (
        <IconContext.Provider value={{ size: "4em", color: '#74F609'}}>
            <nav className="navbar">
                <div className="icon-wrapper">
                    <FcGlobe width="5em" />
                </div>
                <h2 className="navbar-title">People Around The World</h2>
            </nav>
        </IconContext.Provider>
    )
}

export default Navbar
