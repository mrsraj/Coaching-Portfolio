import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../CSS/Testimonials.css";

const Testimonials = () => {
    const { portfolioData } = useContext(AppContext);
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