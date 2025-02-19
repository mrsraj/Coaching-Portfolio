import React from "react";
import "../CSS/Testimonials.css";

function Testimonials() {
    const testimonials = [
        { 
            name: "Alisha Singh", 
            feedback: "The coaching sessions were life-changing! I feel more confident in my career choices.", 
            image: "https://randomuser.me/api/portraits/women/3.jpg" 
        },
        { 
            name: "Vikash ", 
            feedback: "The mentorship I received helped me land my dream job. Highly recommended!", 
            image: "https://randomuser.me/api/portraits/men/3.jpg" 
        },
        { 
            name: "Sumit Singh", 
            feedback: "Amazing guidance! Helped me improve my skills and grow professionally.", 
            image: "https://randomuser.me/api/portraits/men/4.jpg" 
        }
    ];

    return (
        <section id="testimonials" className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonial-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                        <h4 className="testimonial-name">- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
