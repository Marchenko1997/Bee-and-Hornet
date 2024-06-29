import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import css from './CartPopup.module.css';
import { removeFromCart, updateCart } from '../../../../redux/actions';
import  QuantityOfItem  from '../QuantityOfItem/QuantityOfItem'
import OrderForm from '../../../OrderForm/OrderForm';
import OrderConfirmationPopup from '../../../OrderForm/OrderConfirmationPopup/OrderConfirmationPopup';

const CartPopup = ({ onClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [ isOrdering, setIsOrdering ] = useState(false);
  const [ order, setOrder] = useState(null);

  const setCart = (newCart) => {
    dispatch(updateCart(newCart));
  };

  useEffect(() => {
    const osInstance = scrollRef.current.osInstance();
    return () => {
      if (osInstance) osInstance.destroy();
    };
  }, []);

  const handleRemoveFromCart = (index) => {
  dispatch(removeFromCart(index));
  };

  const handleOrder = (formData) => {
    setOrder(formData);
  }

  return (
    <div className={css.cartPopup}>
      <div className={css.cartPopupContent}>
        <button className={css.closeButton} onClick={onClose}>
          ×
        </button>
        {order ? (
          <OrderConfirmationPopup order={order} onClose={onClose} />
        ) : isOrdering ? (
          <OrderForm cart={cart} onBackToCart={() => setIsOrdering(false)} onSubmitOrder={handleOrder} />
        ) : (
          <>
        <h2 className={css.myBasket}>Ваш кошик</h2>
        {cart.length === 0 ? (
          <p className={css.emptyTitle}>Ваша корзина пуста</p>
        ) : (
          <>
            <div className={css.honeySection}>
              <OverlayScrollbarsComponent ref={scrollRef} className={css.honeyList}>
                {cart.map((item, index) => (
                  <li key={index} className={css.honeyItem}>
                    <div className={css.imgWrapper}>
                      <img
                        className={css.itemImg}
                        src="../../../../public/img/honeyAcazion.png"
                        alt="Мед акацієвий"
                      />
                    </div>
                    <div className={css.descriptionWrapper}>
                      <h3 className={css.itemTitle}>Мед акацієвий</h3>
                      <p className={css.itemWeight}>{item.weight}</p>
                      <QuantityOfItem index={index} cart={cart} setCart={setCart}/>
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
                  <svg>
                    <use xlinkHref="#back-icon"></use>
                  </svg>
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
                <button className={css.modalSubmitBtn} type="button" onClick ={() => setIsOrdering(true)}>
                  Оформити замовлення
                </button>
              </div>
            </div>
          </>
        )}
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
