
import PropTypes from 'prop-types';
import css from './OrderConfirmationPopup.module.css';

const OrderConfirmationPopup = ({ onClose }) => {
    return (
      <div className={css.confirmationPopup}>
        <div className={css.confirmationPopupContent}>
          <button className={css.closeButton} onClick={onClose}>
            ×
          </button>
          <h2>Замовлення оформлено</h2>
          <p>Дякуємо за ваше замовлення!</p>
    
        </div>
      </div>
    );
  };
  
  OrderConfirmationPopup.propTypes = {
    order: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  
  export default OrderConfirmationPopup;