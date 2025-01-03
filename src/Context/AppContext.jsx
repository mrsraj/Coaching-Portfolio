import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null); // To store selected course for payment
    const [showPaymentModal, setShowPaymentModal] = useState(false); // State for payment modal visibility
    const [showReceipt, setShowReceipt] = useState(false); // State for receipt visibility

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
            cart, addToCart,
            selectedCourse, setSelectedCourse,
            showPaymentModal, setShowPaymentModal,
            showReceipt, setShowReceipt
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