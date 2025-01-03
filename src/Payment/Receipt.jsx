
import style from './Receipt.module.css';
import { useMyContext } from '../Context/AppContext';

function Receipt() {

    const { selectedCourse, setShowReceipt } = useMyContext();

    const closeReceipt = () => {
        setShowReceipt(false); // Close receipt modal
    };

    const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
        return (originalPrice - (originalPrice * discountPercentage) / 100).toFixed(2);
    };

    return (
        <div className={style.receipt_modal}>
            <div className={style.modal_content}>
                <h2>Payment Successful</h2>
                <p>
                    Thank you for your purchase of <strong>{selectedCourse?.title}</strong>.
                </p>
                <p>
                    Amount Paid: <strong>${calculateDiscountedPrice(selectedCourse?.originalPrice, selectedCourse?.discountPercentage)}</strong>
                </p>
                <button className={style.close_receipt_btn} onClick={closeReceipt}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Receipt;