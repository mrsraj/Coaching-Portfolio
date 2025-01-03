import React, { useState, useEffect } from "react";
import style from "./BannerMover.module.css";

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

    return (
        <div className={style.banner_mover}>
            <div className={`${style.banners_Container} ${style[direction]}`}>
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`${style.banner} ${index === currentIndex ? style.active : ""}`}
                        style={{ background: banner.background }}
                    >
                        <h2>{banner.title}</h2>
                        <p>{banner.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BannerMover;