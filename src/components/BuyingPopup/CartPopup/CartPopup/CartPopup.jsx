// CartPopup.js
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import { useNavigate } from 'react-router-dom'; 
import css from './CartPopup.module.css';
import { removeFromCart, updateCart } from '../../../../redux/actions';
import QuantityOfItem from '../QuantityOfItem/QuantityOfItem';


const CartPopup = ({ onClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);

  const setCart = (newCart) => {
    dispatch(updateCart(newCart));
  };

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      closePopup();
    }
  };

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200); 
  };

  useEffect(() => {
    // Установка overflow и добавление обработчика события keydown
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEsc);

    return () => {
      // Восстановление overflow и удаление обработчика события keydown
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEsc);
    };
  }, );

  return (
    <div className={`${css.cartPopup} ${isClosing ? css.closing : ''}`} onClick={handleBackdropClick}>
      <div className={css.cartPopupContent}>
        <button className={css.closeButton} onClick={onClose}>
          ×
        </button>
        <h2 className={css.myBasket}>Ваш кошик</h2>
        {cart.length === 0 ? (
          <p className={css.emptyTitle}>Ваша корзина пуста</p>
        ) : (
          <>
            <div className={css.honeySection}>
              <OverlayScrollbarsComponent ref={scrollRef} className={css.honeyList}>
                {cart.slice(0, 5).map((item, index) => (
                  <li key={index} className={css.honeyItem}>
                    <div className={css.imgWrapper}>
                      <img
                        className={css.itemImg}
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className={css.descriptionWrapper}>
                      <h3 className={css.itemTitle}>{item.title}</h3>
                      <p className={css.itemWeight}>{item.weight}</p>
                      <QuantityOfItem index={index} cart={cart} setCart={setCart} />
                      <p className={css.itemPrice}>
                        {item.pricePerUnit * item.quantity} грн
                      </p>
                    </div>
                    <button className={css.deleteButton} type="button" onClick={() => handleRemoveFromCart(index)}>
                      <svg className={css.bucketIcon}>
                        <use xlinkHref="../../../../public/icons/sprite.svg#removal-bucket"></use>
                      </svg>
                    </button>
                  </li>
                ))}
              </OverlayScrollbarsComponent>
            </div>
            <div className={css.modalButtonWrapper}>
              <div className={css.buttonBackWrapper}>
                <button className={css.buttonBack} type="button">
                  <svg className={css.arrowLink}> <use  xlinkHref="../../../../../public/icons/sprite.svg#arrow-link"></use></svg>
                  Повернутися до покупок
                </button>
              </div>
              <div className={css.modalSubmitWrapper}>
                <p className={css.totalPrice}>
                  {cart.reduce(
                    (total, item) => total + item.pricePerUnit * item.quantity,
                    0
                  )} грн
                </p>
                <button
                  className={css.modalSubmitBtn}
                  type="button"
                  onClick={() => navigate('/order')}
                >
                  Оформити замовлення
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  
  );
};

CartPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CartPopup;