import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [portfolioData, setPortfolioData] = useState({
        name: "John Doe",
        coachingAreas: ["Life Coaching", "Executive Coaching", "Career Coaching"],
        testimonials: [
            { name: "Alice", feedback: "Great coach! Helped me immensely." },
            { name: "Bob", feedback: "Transformative experience!" },
        ],
    });

    return (
        <AppContext.Provider value={{ portfolioData, setPortfolioData }}>
            {children}
        </AppContext.Provider>
    );
};