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
      <span className={css.quantity}>Количество</span>
      <div className={css.quantityWrapper}> {/* Добавлена обертка вокруг элементов управления для последовательного стиля */}
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
    </div>
  );
};

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired
};

export default QuantitySelector;
