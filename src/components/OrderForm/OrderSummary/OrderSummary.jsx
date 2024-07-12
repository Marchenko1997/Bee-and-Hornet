
import PropTypes from 'prop-types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import css from './OrderSummary.module.css';
import OrderItem from '../OrderItem/OrderItem';

const OrderSummary = ({ cart, onBackToCart, totalPrice }) => {
  return (
    <div className={css.orderSummary}>
      <div className={css.backButtonContainer}>
        <button type="button" onClick={onBackToCart} className={css.backButton}>
          <svg className={css.arrowLink}>
            <use xlinkHref="../../../public/icons/sprite.svg#arrow-link"></use>
          </svg>
          Повернутися до покупок
        </button>
      </div>
      <h3>Ваше замовлення:</h3>
      <OverlayScrollbarsComponent
        className={css.scrollWrapper}
        options={{ scrollbars: { autoHide: 'scroll' } }}
      >
        <ul>
          {cart.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
        </ul>
      </OverlayScrollbarsComponent>
      <p className={css.totalPrice}>
        <span>Вартість</span> {totalPrice}грн
      </p>
    </div>
  );
};

OrderSummary.propTypes = {
  cart: PropTypes.array.isRequired,
  onBackToCart: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderSummary;
