import PropTypes from 'prop-types';
import css from './QuantityOfItem.module.css';

const QuantityOfItem = ({ index, cart, setCart }) => {
  const item = cart[index];

  const handleIncreaseQuantity = () => {
    const newCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCart);
  };

  const handleDecreaseQuantity = () => {
    const newCart = cart.map((item, i) =>
      i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(newCart);
  };

  if (!item) {
    return null; // Додайте обробку, якщо item не визначено
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
