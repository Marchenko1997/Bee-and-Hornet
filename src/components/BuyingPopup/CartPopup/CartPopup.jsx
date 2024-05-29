
import css from './CartPopup.module.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CartPopup = ({ onClose }) => {
    const cart = useSelector(state => state.cart);

    return (
        <div className={css.cartPopup}>
            <div className={css.cartPopupContent}>
                <button className={css.closeButton} onClick={onClose}>×</button>
                <h2>Корзина</h2>
                {cart.length === 0 ? (
                    <p>Ваша корзина пуста</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.weight} - {item.quantity} шт - {item.pricePerUnit * item.quantity} грн
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

CartPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default CartPopup;
