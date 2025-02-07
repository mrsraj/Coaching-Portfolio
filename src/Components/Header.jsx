import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "../CSS/Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Corrected state initialization

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">Raj Coaching</div>
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                >
                    About
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/testimonials"
                    className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                >
                    Testimonials
                </NavLink>
                
                <NavLink>
                    Contact
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