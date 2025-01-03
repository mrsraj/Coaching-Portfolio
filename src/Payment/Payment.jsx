
import { useMyContext } from '../Context/AppContext';
import style from './Payment.module.css'

function Payment() {

    const { selectedCourse,setShowReceipt, setShowPaymentModal} = useMyContext();

    const closePaymentModal = () => {
        setShowPaymentModal(false); // Close the payment modal when X is clicked
    };

    const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
        return (originalPrice - (originalPrice * discountPercentage) / 100).toFixed(2);
    };

    const handlePayment = () => {
        setShowPaymentModal(false); // Hide payment modal
        setShowReceipt(true); // Show receipt modal
    };

    return (
        <div className={style.payment_modal}>
            <div className={style.modal_content}>
                <button className={style.close_modal_btn} onClick={closePaymentModal}>
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
                <button className={style.payment_btn} onClick={handlePayment}>
                    Make Payment
                </button>
            </div>
        </div>
    )
}

export default Payment;