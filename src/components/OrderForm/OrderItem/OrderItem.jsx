
import PropTypes from 'prop-types';
import css from './OrderItem.module.css';

const OrderItem = ({ item }) => {
  return (
    <li className={css.orderItem}>
      <img
        className={css.itemImg}
        src="../../../public/img/honeyAcazion.png"
        alt="Мед акацієвий"
      />
      <span>
        {item.name} {item.weight} x {item.quantity} - {item.pricePerUnit * item.quantity} грн
      </span>
    </li>
  );
};

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default OrderItem;
