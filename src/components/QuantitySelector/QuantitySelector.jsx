import css from "./QuantitySelector.module.css";
import PropTypes from 'prop-types';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const handleDecrease = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 10) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className={css.productQuantity}>
      <span className={css.quantity}>Кількість</span>
      <div className={css.quantityControls}>
        <button
          className={css.quantityDecrease}
          onClick={handleDecrease}
          disabled={quantity <= 0}
        >
          -
        </button>
        <span className={css.quantityNumber}>{quantity}</span>
        <button
          className={css.quantityIncrease}
          onClick={handleIncrease}
          disabled={quantity >= 10}
        >
          +
        </button>
      </div>
    </div>
  );
};

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired, // quantity должен быть числом и обязательным
  onQuantityChange: PropTypes.func.isRequired // onQuantityChange должен быть функцией и обязательным
};

export default QuantitySelector;
