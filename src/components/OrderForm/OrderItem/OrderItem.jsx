import PropTypes from 'prop-types';
import css from './OrderItem.module.css';

const OrderItem = ({ item }) => {
  return (
    <li className={css.orderItem}>
      <img className={css.itemImg} src={item.image} alt={item.title} />
      <div className={css.itemInfo}>
        <p className={css.itemName}>{item.title}</p>
        <span>
          {item.weight} x {item.quantity}
        </span>
        <p className={css.itemPrice}>{item.pricePerUnit * item.quantity} грн</p>
      </div>
    </li>
  );
};

OrderItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    weight: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    pricePerUnit: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderItem;
