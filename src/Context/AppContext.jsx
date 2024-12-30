import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addToCart = (course) => {
        setCart((prevCart) => [...prevCart, course]);
    };

    const [portfolioData, setPortfolioData] = useState({
        name: "John Doe",
        coachingAreas: ["Life Coaching", "Executive Coaching", "Career Coaching"],
        testimonials: [
            { name: "Alice", feedback: "Great coach! Helped me immensely." },
            { name: "Bob", feedback: "Transformative experience!" },
        ],
    });

    return (
        <AppContext.Provider value={{
            portfolioData, setPortfolioData,
            cart, addToCart
        }}>

            {children}

        </AppContext.Provider>
    );
};

function useMyContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyContext.Provider");
    }
    return context;
}

export { AppProvider, useMyContext };