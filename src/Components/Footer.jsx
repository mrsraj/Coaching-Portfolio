import React from "react";
import "../CSS/Footer.css";

const Footer = () => (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} John Doe Coaching. All rights reserved.</p>
    </footer>
);

export default Footer;