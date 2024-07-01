import { useState } from "react";
import PropTypes from 'prop-types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import css from "./OrderForm.module.css";

const OrderForm = ({ cart, onBackToCart, onSubmitOrder }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    deliveryMethod: 'Відділення',
    city: '',
    branch: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOrder(formData);
  };

  const totalPrice = cart.reduce((total, item) => total + item.pricePerUnit * item.quantity, 0);

  return (
    <div className={css.container}>
      <div className={css.orderForm}>
        <h2>Оформлення замовлення</h2>
        <form onSubmit={handleSubmit}>
          <div className={css.contactInfo}>
            <h3>Контактні дані:</h3>
            <label>
              Ім'я
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
            <label>
              Прізвище
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label>
            <label>
              Телефон
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
          </div>
          <div className={css.deliveryInfo}>
            <h3>Вкажіть адресу доставки (Нова пошта):</h3>
            <label>
              Спосіб доставки
              <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange}>
                <option value="Відділення">Доставка до відділення</option>
                <option value="Двері">Доставка до дверей</option>
              </select>
            </label>
            <label>
              Місто
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </label>
            <label>
              Відділення
              <select name="branch" value={formData.branch} onChange={handleChange} required>
                <option value="">Обрати відділення</option>
                {/* Добавьте варианты для отделений здесь */}
              </select>
            </label>
            <label>
              Коментар
              <textarea name="comment" value={formData.comment} onChange={handleChange}></textarea>
            </label>
          </div>
          <button type="submit" className={css.submitButton}>Оформити замовлення</button>
        </form>
      </div>
      <div className={css.orderSummary}>
        <div className={css.backButtonContainer}>
          <button type="button" onClick={onBackToCart} className={css.backButton}>Повернутися до покупок</button>
        </div>
        <h3>Ваше замовлення</h3>
        <OverlayScrollbarsComponent className={css.scrollWrapper} options={{ scrollbars: { autoHide: 'scroll' } }}>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className={css.orderItem}>
                <img
                  className={css.itemImg}
                  src="../../../public/img/honeyAcazion.png"
                  alt="Мед акацієвий"
                />
                <span>{item.name} {item.weight} x {item.quantity} - {item.pricePerUnit * item.quantity} грн</span>
              </li>
            ))}
          </ul>
        </OverlayScrollbarsComponent>
        <p className={css.totalPrice}>Вартість: {totalPrice} грн</p>
      </div>
    </div>
  );
};

OrderForm.propTypes = {
  cart: PropTypes.array.isRequired,
  onBackToCart: PropTypes.func.isRequired,
  onSubmitOrder: PropTypes.func.isRequired,
};

export default OrderForm;
