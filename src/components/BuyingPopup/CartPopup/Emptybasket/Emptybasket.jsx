import { useState } from "react";
import PropTypes from "prop-types";
import css from "./Emptybasket.module.css";
import emptyBasketImage from "./images/cart-background-d.png";

const Emptybasket = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 100); 
  };

  return (
    <div className={`${css.emptyBasket} ${isClosing ? css.closing : ''}`}>
      <button className={css.closeButton} onClick={handleClose}>
        <svg className={css.modalCloseIcon}>
          <use xlinkHref="/public/icons/sprite.svg#cross-close"></use>
       </svg>
      </button>
      <h2 className={css.myBasket}>Ваш кошик</h2>
      <div className={css.emptyContent}>
        <picture className={css.emptyBasketImg}>
          <source srcSet={emptyBasketImage} type="image/cart" />
          <img
            className={css.emptyImg}
            src={emptyBasketImage}
            alt="emptyBasket"
          />
        </picture>
        <p className={css.emptyTitle}>Кошик порожній</p>
        <p className={css.emptyText}>
          Дивись наш каталог та обирай смачний та корисний мед
        </p>
        <div className={css.borderWrapper}>
          <div className={css.emptyCartBorder}></div>
        </div>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.buttonBasket} onClick ={handleClose}>Купити мед</button>
      </div>
    </div>
  );
};

Emptybasket.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Emptybasket;
