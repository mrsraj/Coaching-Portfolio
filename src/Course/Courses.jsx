import React, { useRef, useState, useEffect, useContext } from "react";
import { useMyContext } from "../Context/AppContext"; // Importing CartContext
import "./Courses.css";

// Sample course data with original price and discount percentage
const courses = [
    {
        id: 1,
        logo: "https://via.placeholder.com/100",
        title: "Course 1",
        description: "Learn the basics of web development.",
        originalPrice: 99.99,
        discountPercentage: 20, // 20% discount
    },
    {
        id: 2,
        logo: "https://via.placeholder.com/100",
        title: "Course 2",
        description: "Master React.js with this in-depth course.",
        originalPrice: 150.00,
        discountPercentage: 15, // 15% discount
    },
    {
        id: 3,
        logo: "https://via.placeholder.com/100",
        title: "Course 3",
        description: "Understand the fundamentals of UI/UX design.",
        originalPrice: 120.00,
        discountPercentage: 25, // 25% discount
    },
    {
        id: 4,
        logo: "https://via.placeholder.com/100",
        title: "Course 4",
        description: "Advanced concepts in machine learning.",
        originalPrice: 200.00,
        discountPercentage: 10, // 10% discount
    },
    {
        id: 5,
        logo: "https://via.placeholder.com/100",
        title: "Course 5",
        description: "Introduction to cloud computing.",
        originalPrice: 80.00,
        discountPercentage: 30, // 30% discount
    },
];

// Helper function to calculate discounted price
const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    return (originalPrice - (originalPrice * discountPercentage) / 100).toFixed(2);
};

const PaidCourses = () => {
    const [showPaymentModal, setShowPaymentModal] = useState(false); // State for payment modal visibility
    const [showReceipt, setShowReceipt] = useState(false); // State for receipt visibility
    const [selectedCourse, setSelectedCourse] = useState(null); // To store selected course for payment
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const { addToCart } = useMyContext(); // Using addToCart from context

    const checkScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    };

    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = direction === "left" ? -300 : 300;
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    useEffect(() => {
        checkScroll();
        const ref = scrollRef.current;
        ref.addEventListener("scroll", checkScroll);
        return () => ref.removeEventListener("scroll", checkScroll);
    }, []);

    const handleAddToCart = (course) => {
        addToCart(course); // Add course to the cart using context
        alert(`${course.title} has been added to the cart!`);
    };

    const handleBuyNow = (course) => {
        setSelectedCourse(course);
        setShowPaymentModal(true); // Show the payment modal when Buy Now is clicked
    };

    const handlePayment = () => {
        setShowPaymentModal(false); // Hide payment modal
        setShowReceipt(true); // Show receipt modal
    };

    const closeReceipt = () => {
        setShowReceipt(false); // Close receipt modal
    };

    const closePaymentModal = () => {
        setShowPaymentModal(false); // Close the payment modal when X is clicked
    };

    return (
        <> <h2 className="courses-heading">OUR COURSES</h2>
            <div className="paid-courses">
                {canScrollLeft && (
                    <button className="scroll-btn left" onClick={() => scroll("left")}>
                        &#9664;
                    </button>
                )}
                <div className="courses-container" ref={scrollRef}>
                    {courses.map((course) => (
                        <div key={course.id} className="course-card">
                            <img src={course.logo} alt={`${course.title} logo`} />
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <div className="price">
                                <span className="original-price">
                                    ${course.originalPrice.toFixed(2)}
                                </span>
                                <span className="discounted-price">
                                    ${calculateDiscountedPrice(
                                        course.originalPrice,
                                        course.discountPercentage
                                    )}
                                </span>
                            </div>
                            <div className="course-actions">
                                <button
                                    className="buy-button"
                                    onClick={() => handleBuyNow(course)}
                                >
                                    Buy Now
                                </button>
                                <button
                                    className="add-to-cart-button"
                                    onClick={() => handleAddToCart(course)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {canScrollRight && (
                    <button className="scroll-btn right" onClick={() => scroll("right")}>
                        &#9654;
                    </button>
                )}

                {/* Fake Payment Modal */}
                {showPaymentModal && (
                    <div className="payment-modal">
                        <div className="modal-content">
                            <button className="close-modal-btn" onClick={closePaymentModal}>
                                &times;
                            </button>
                            <h2>Payment Page</h2>
                            <p>
                                You are about to purchase the course{" "}
                                <strong>{selectedCourse?.title}</strong> for{" "}
                                <strong>
                                    ${calculateDiscountedPrice(
                                        selectedCourse?.originalPrice,
                                        selectedCourse?.discountPercentage
                                    )}
                                </strong>
                            </p>
                            <button className="payment-btn" onClick={handlePayment}>
                                Make Payment
                            </button>
                        </div>
                    </div>
                )}

                {/* Payment Receipt Modal */}
                {showReceipt && (
                    <div className="receipt-modal">
                        <div className="modal-content">
                            <h2>Payment Successful</h2>
                            <p>
                                Thank you for your purchase of <strong>{selectedCourse?.title}</strong>.
                            </p>
                            <p>
                                Amount Paid: <strong>${calculateDiscountedPrice(selectedCourse?.originalPrice, selectedCourse?.discountPercentage)}</strong>
                            </p>
                            <button className="close-receipt-btn" onClick={closeReceipt}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default PaidCourses;