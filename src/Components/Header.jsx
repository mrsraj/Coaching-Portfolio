import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import "../CSS/Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">Raj Coaching</div>
            
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <NavLink
                    to="/"
                    
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    to="/portfolio"
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/testimonials"
                >
                    Testimonials
                </NavLink>
                
                <NavLink
                  to='/videos' 
                >
                    DemoVideo
                </NavLink>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;