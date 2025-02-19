import React from "react";
import style from "../CSS/Footer.module.css";
import Contact from "./Contact";

const Footer = () => (
    <footer className={style.footer} id="contact">
        <div>
            <h4><a className={style.INSTAGRAM} href="https://www.instagram.com/">INSTAGRAM</a></h4>
        </div>

        <div>
            <h4><a className={style.FACEBOOK} href="https://www.facebook.com/">FACEBOOK</a></h4>
        </div>

        <div>
            <h4><a className={style.LINKEDIN} href="https://www.linkedin.com/">LINKEDIN</a></h4>
        </div>
        <div>
            <h4>CONTACT</h4>
            <Contact />
        </div>
        
    </footer>
);

export default Footer;