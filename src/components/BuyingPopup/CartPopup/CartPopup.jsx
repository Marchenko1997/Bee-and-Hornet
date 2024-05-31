
import css from './CartPopup.module.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CartPopup = ({ onClose }) => {
    const cart = useSelector(state => state.cart);

    return (
        <div className={css.cartPopup}>
            <div className={css.cartPopupContent}>
                <button className={css.closeButton} onClick={onClose}>×</button>
                <h1 className={css.myBasket}>Ваш кошик</h1>
                {cart.length === 0 ? (
                    <p className={css.emptyTitle}>Ваша корзина пуста</p>
                ) : (
                    <div className={css.honeySection}>
                    <ul className={css.honeyList}>
                        {cart.map((item, index) => (
                            <li key={index} className={css.honeyItem}>
                                {item.weight} - Кількість <button className={css.decreaseBtn}> - </button>{item.quantity} шт <button className={css.increaseBtn}> + </button> - {item.pricePerUnit * item.quantity} грн
                            </li>
                        ))}
                    </ul>
                    <button className={css.deleteButton} type='button'>
                        <svg>
                   <use xlinkHref = ""></use> 
                        </svg>
                        </button>
                    </div>
                    <div className={css.modalButtonWrapper}>
                        <div className={css.buttonBackWrapper}>
                            <button className={css.buttonBack} type='button '>
                                <svg>
                                    <use xlinkHref = ""></use>
                                </svg>
                                Повернутися до покупок
                            </button>
                        </div>
                        <div className={css.modalSubmitWrapper}>
                            <p className={css.totalPrice}>Ціна</p>
                            <button className={css.modalSubmitBtn} type="submit">Оформити замовлення</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

CartPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default CartPopup;
