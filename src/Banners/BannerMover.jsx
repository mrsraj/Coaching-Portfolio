import React, { useState, useEffect } from "react";
import "./BannerMover.css";

const banners = [
    {
        title: "Transform Your Life with Coaching",
        description: "Join our exclusive life coaching sessions and unlock your potential.",
        background: "#4caf50",
    },
    {
        title: "Executive Coaching Program",
        description: "Empower your career with personalized executive coaching.",
        background: "#2196f3",
    },
    {
        title: "Master Your Mindset",
        description: "Learn the art of positive thinking in our latest course.",
        background: "#ff9800",
    },
    {
        title: "Achieve Career Success",
        description: "Enroll in our career coaching program for guaranteed results.",
        background: "#9c27b0",
    },
];

const BannerMover = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("next");

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection("next");
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setDirection("prev");
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setDirection("next");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    return (
        <div className="banner-mover">
            <div className={`banners-container ${direction}`}>
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`banner ${
                            index === currentIndex ? "active" : ""
                        }`}
                        style={{ background: banner.background }}
                    >
                        <h2>{banner.title}</h2>
                        <p>{banner.description}</p>
                    </div>
                ))}
            </div>
            <div className="controls">
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default BannerMover;