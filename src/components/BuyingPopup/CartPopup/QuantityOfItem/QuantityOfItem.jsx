// QuantityOfItem.js

import PropTypes from 'prop-types';
import css from './QuantityOfItem.module.css';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../../redux/actions';

const QuantityOfItem = ({ index, cart, setCart }) => {
  const item = cart[index];
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    const newCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(updateCart(newCart)); // Обновление корзины в Redux
    setCart(newCart); // Обновление локального состояния
  };

  const handleDecreaseQuantity = () => {
    const newCart = cart.map((item, i) =>
      i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    dispatch(updateCart(newCart)); // Обновление корзины в Redux
    setCart(newCart); // Обновление локального состояния
  };

  if (!item) {
    return null; // Обработка, если item не определен
  }

  return (
    <div className={css.itemQuantityWrapper}>
      <p className={css.itemQuantityText}>Кількість</p>
      <button className={css.decreaseBtn} onClick={handleDecreaseQuantity}>
        {' '}
        -{' '}
      </button>
      <p className={css.itemQuantity}>{item.quantity} шт </p>
      <button className={css.increaseBtn} onClick={handleIncreaseQuantity}>
        {' '}
        +{' '}
      </button>
    </div>
  );
};

QuantityOfItem.propTypes = {
  index: PropTypes.number.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default QuantityOfItem;
