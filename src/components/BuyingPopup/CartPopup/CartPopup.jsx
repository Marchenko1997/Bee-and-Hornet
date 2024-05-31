import css from './CartPopup.module.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CartPopup = ({ onClose }) => {
  const cart = useSelector(state => state.cart);

  return (
    <div className={css.cartPopup}>
      <div className={css.cartPopupContent}>
        <button className={css.closeButton} onClick={onClose}>×</button>
        <h2 className={css.myBasket}>Ваш кошик</h2>
        {cart.length === 0 ? (
          <p className={css.emptyTitle}>Ваша корзина пуста</p>
        ) : (
          <>
            <div className={css.honeySection}>
              <ul className={css.honeyList}>
                {cart.map((item, index) => (
                  <li key={index} className={css.honeyItem}>
                    
                    <div className={css.imgWrapper}>
                        <img className={css.itemImg} src="../../../../public/img/honeyAcazion.png" alt="Мед акацієвий"  />
                    </div>
                    <div className={css.descriptionWrapper}>
                    
                        <h3 className={css.itemTitle}>Мед акацієвий</h3>
                        <p className={css.itemWeight}>{item.weight}</p> 
                        <div className={css.itemQuantityWrapper}>
                            <p className={css.itemQuantityText}>Кількість </p>
                    <button className={css.decreaseBtn}> - </button>
                    <p className={css.itemQuantity}>{item.quantity} шт </p>
                    <button className={css.increaseBtn}> + </button> 
                    - {item.pricePerUnit * item.quantity} грн</div>
                    </div>
                    
                  </li>
                ))}
              </ul>
              <button className={css.deleteButton} type='button'>
                <svg>
                  <use xlinkHref="#delete-icon"></use> 
                </svg>
              </button>
            </div>
            <div className={css.modalButtonWrapper}>
              <div className={css.buttonBackWrapper}>
                <button className={css.buttonBack} type='button'>
                  <svg>
                    <use xlinkHref="#back-icon"></use>
                  </svg>
                  Повернутися до покупок
                </button>
              </div>
              <div className={css.modalSubmitWrapper}>
                <p className={css.totalPrice}>{cart.reduce((total, item ) => total + item.pricePerUnit * item.quantity, 0)} грн </p>
                <button className={css.modalSubmitBtn} type="button">Оформити замовлення</button>
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
