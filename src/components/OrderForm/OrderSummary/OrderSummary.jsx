import PropTypes from 'prop-types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import css from './OrderSummary.module.css';
import OrderItem from '../OrderItem/OrderItem';
import { HashLink } from 'react-router-hash-link';
import { icons } from "../../../../public/icons/index";

const OrderSummary = ({ cart, onBackToCart, totalPrice }) => {
 

  return (
    <div className={css.orderSummary}>
      <div className={css.backButtonContainer}>
        <HashLink
          to="/#products"
          onClick={onBackToCart}
          className={css.backButton}
        >
          <svg className={css.arrowLink}>
            <use xlinkHref={`${icons}#arrow-left`}></use>
          </svg>
          Повернутися до покупок
        </HashLink>
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
        <span className={css.price}>Вартість</span> {totalPrice} грн
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
