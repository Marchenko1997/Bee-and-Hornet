import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import css from './CartPopup.module.css';
import { removeFromCart, updateCart } from '../../../../redux/actions';
import QuantityOfItem from '../QuantityOfItem/QuantityOfItem';
import Emptybasket from '../Emptybasket/Emptybasket';
import CustomScrollWrapper from '../../../OrderForm/shared/СustomScrollWrapper/СustomScrollWrapper';
import { icons } from '../../../../../public/icons/index';
import { useModal } from '../../../../context/useModal';

const CartPopup = ({ onClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);
  const closeModal = useModal();

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
      closeModal(); 
      onClose(); 
    }, 200);
  };

  const disableScroll = () => {
    const scrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
  };

  const enableScroll = () => {
    const scrollPosition = Math.abs(parseInt(document.body.style.top, 10));
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition); 
  };

  useEffect(() => {
    disableScroll();
    document.addEventListener('keydown', handleEsc); 

    return () => {
      enableScroll();
      document.removeEventListener('keydown', handleEsc); 
    };
  }, []);

  if (cart.length === 0) {
    return (
      <div
        className={`${css.cartPopup} ${isClosing ? css.closing : ''}`}
        onClick={handleBackdropClick}
      >
        <Emptybasket onClose={closePopup} />
      </div>
    );
  }

  const totalPrice = cart.reduce((total, item) => {
    const itemTotal = item.pricePerUnit * item.quantity;
    return total + (isNaN(itemTotal) ? 0 : itemTotal);
  }, 0);

  return (
    <div
      className={`${css.cartPopup} ${isClosing ? css.closing : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={css.cartPopupContent}>
        <button className={css.closeButton} onClick={closePopup}>
          <svg className={css.modalCloseButtonIcon}>
            <use xlinkHref={`${icons}#cross-close`}></use>
          </svg>
        </button>
        <h2 className={css.myBasket}>Ваш кошик</h2>
        <div className={css.honeySection}>
          <CustomScrollWrapper className={css.honeyList}>
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
                <button
                  className={css.deleteButton}
                  type="button"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  <svg className={css.bucketIcon}>
                    <use xlinkHref={`${icons}#removal-bucket`}></use>
                  </svg>
                </button>
              </li>
            ))}
          </CustomScrollWrapper>
        </div>
        <div className={css.listBorder}></div>
        <div className={css.modalButtonWrapper}>
          <div className={css.buttonBackWrapper}>
            <button
              type="button"
              className={css.buttonBack}
              onClick={() => {
                closePopup();
                setTimeout(() => {
                  navigate('/#products'); 
                }, 200); 
              }}
            >
              <svg className={css.arrowLink}>
                <use xlinkHref={`${icons}#arrow-link`}></use>
              </svg>
              Повернутися до покупок
            </button>
          </div>
          <div className={css.modalSubmitWrapper}>
            <p className={css.totalPrice}>{totalPrice} грн</p>
            <button
              className={css.modalSubmitBtn}
              type="button"
              onClick={() => navigate('/order')}
            >
              Оформити замовлення
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CartPopup;
