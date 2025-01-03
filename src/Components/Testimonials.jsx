import React, { useContext } from "react";
import { useMyContext } from "../Context/AppContext";
import "../CSS/Testimonials.css";

function Testimonials(){

    const { portfolioData } = useMyContext();

    return (
        <section id="testimonials" className="testimonials">
            <h2>Testimonials</h2>
            <ul>
                {portfolioData.testimonials.map((testimonial, index) => (
                    <li key={index}>
                        <p>"{testimonial.feedback}"</p>
                        <strong>- {testimonial.name}</strong>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Testimonials;