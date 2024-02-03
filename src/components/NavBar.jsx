import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/images/logo-1.png"

const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <>
            <nav className="navbar">
                <div className="nav-container">

                    <div className="nav-logo">
                        {/* <NavLink to="/" className="logo">
                            Hallabol'23
                        </NavLink> */}
                        <div className="nav-logo">
                            <NavLink to="/" className="logo-image">
                                <img src={Logo} alt="logo" className="" />
                            </NavLink>
                        </div>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/games"
                                className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                onClick={handleClick}
                            >
                                Register
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink
                                to="/gallery"
                                className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                onClick={handleClick}
                            >
                                Gallery
                            </NavLink>
                        </li> */}
                        {/* <li className="nav-item">
                            <NavLink
                                to="/sponsors"
                                className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                onClick={handleClick}
                            >
                                Sponsors
                            </NavLink>
                        </li> */}
                        
                        <li className="nav-item">
                            <NavLink
                                to="/our-team"
                                className={({ isActive }) => (isActive ? 'active-nav' : 'nav-links')}
                                onClick={handleClick}
                            >
                                Our Team
                            </NavLink>
                        </li>
                        







                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
