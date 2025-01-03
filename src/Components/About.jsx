import React, { useContext } from "react";
import { useMyContext } from "../Context/AppContext";
import "../CSS/About.css";

const About = () => {
    const { portfolioData } = useMyContext();
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <p>Hello! I'm {portfolioData.name}, a professional coach specializing in:</p>
            <ul>
                {portfolioData.coachingAreas.map((area, index) => (
                    <li key={index}>{area}</li>
                ))}
            </ul>
        </section>
    );
};

export default About;