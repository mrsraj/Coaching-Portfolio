import React, { useRef, useState, useEffect, useContext } from "react";
import { useMyContext } from "../Context/AppContext"; // Importing CartContext
import style from "./Courses.module.css";
import Payment from "../Payment/Payment";
import Receipt from "../Payment/Receipt";

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
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const { addToCart,setSelectedCourse, showPaymentModal, showReceipt,setShowPaymentModal} = useMyContext(); // Using addToCart from context

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


    return (
        <> <h2 className={style.courses_heading}>OUR COURSES</h2>
            <div className={style.paid_courses}>
                {canScrollLeft && (
                    <button className={`${style.scroll_btn} ${style.left}`} onClick={() => scroll("left")}>
                        &#9664;
                    </button>
                )}
                <div className={style.courses_container} ref={scrollRef}>
                    {courses.map((course) => (
                        <div key={course.id} className={style.course_card}>
                            <img src={course.logo} alt={`${course.title} logo`} />
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <div className={style.price}>
                                <span className={style.original_price}>
                                    ${course.originalPrice.toFixed(2)}
                                </span>
                                <span className={style.discounted_price}>
                                    ${calculateDiscountedPrice(
                                        course.originalPrice,
                                        course.discountPercentage
                                    )}
                                </span>
                            </div>
                            <div className={style.course_actions}>
                                <button
                                    className={style.buy_button}
                                    onClick={() => handleBuyNow(course)}
                                >
                                    Buy Now
                                </button>
                                <button
                                    className={style.add_to_cart_button}
                                    onClick={() => handleAddToCart(course)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {canScrollRight && (
                    <button className={`${style.scroll_btn} ${style.right}`} onClick={() => scroll("right")}>
                        &#9654;
                    </button>
                )}

                {/* Fake Payment Modal */}
                {showPaymentModal && <Payment/>}

                {/* Payment Receipt Modal */}
                {showReceipt && <Receipt/>}
            </div>
        </>
    );
};

export default PaidCourses;