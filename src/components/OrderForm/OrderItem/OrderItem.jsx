import PropTypes from 'prop-types';
import css from './OrderItem.module.css';

const OrderItem = ({ item }) => {
  return (
    <li className={css.orderItem}>
      <img
        className={css.itemImg}
        src={item.image}
        alt={item.name}
      />
      <span>
        {item.name} {item.weight} x {item.quantity} - {item.pricePerUnit * item.quantity} грн
      </span>
    </li>
  );
};

OrderItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    pricePerUnit: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderItem;
