import React from "react";
import "../CSS/Header.css";

const Header = () => (
    <header className="header">
        <h1>Raj Coaching</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
);

export default Header;