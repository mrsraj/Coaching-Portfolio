import React from "react";
import style from "../CSS/Footer.module.css";
import Contact from "./Contact";

const Footer = () => (
    <footer className={style.footer} id="contact">
        <div>
            <h4>INSTAGRAM</h4>
        </div>

        <div>
            <h4>FACEBOOK</h4>
        </div>

        <div>
            <h4>LINKEDIN</h4>
        </div>
        <div>
            <h4>CONTACT</h4>
            <Contact />
        </div>
    </footer>
);

export default Footer;