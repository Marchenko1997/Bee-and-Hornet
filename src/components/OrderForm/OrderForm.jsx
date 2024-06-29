import { useState } from "react";
import css from "./OrderForm.module.css";
import PropTypes from 'prop-types';


const OrderForm =({ cart, onBackToCart, onSubmitOrder}) => {
    const [formData, setFormDate] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        deliveryMethod: 'Відділення',
        city: '',
        branch: '',
        comment: '',
    });

    // Обработчик изменения полей формы
    const handleChange = (e) => {
        const { name, value} = e.target;
        // Обновление состояния с новыми данными
//         Квадратные скобки вокруг name ([name]: value) - это вычисляемое свойство объекта.
// Это значит, что значение переменной name будет использовано как ключ для свойства в новом объекте.
// Например, если name равно 'email', тогда выражение [name]: value будет интерпретироваться как email: value.
        setFormDate({...formData, [name]:value});
    };
      // Обработчик отправки формы
     const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitOrder(formData);
     };

     const totalPrice = cart.reduce((total, item) => total + item.pricePerUnit * item.quantity, 0);

     return (
  <div className={css.orderForm}>
    <h2>Оформлення замовлення</h2>
    <form onSubmit = {handleSubmit}>
        <div className={css.contactInfo}>
            <label>
                Імя
                <input type="text" name="firstName" value={formData.firstName} onChange= {handleChange} required/>
            </label>
            <label>Прізвище
             <input type="text" name="lastName" value={formData.lastName} onChange ={handleChange} required/>
            </label>
            <label>
                Телефон
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
        </div>
        <div className={css.deliveryInfo}>
          <label>
            Спосіб доставки
            <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange}>
                <option value="Відділення"> Доставка до відділення </option>
                <option value="Двері"> Доставка до дверей </option>
            </select>
          </label>
          <label>
            Місто
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </label>
          <label>
            Відділення
            <input type="text" name="branch" value={formData.branch} onChange={handleChange} required />
          </label>
          <label> 
            Коментар
            <textarea name="comment" value={formData.comment} onChange={handleChange}></textarea>
          </label>
        </div>
        <div className={css.btnSubmitForm}>
        <button type="submit">Оформити замовлення</button>
        </div>
        <div className={css.btnReturntToPurchases}>
             <button type="button" onClick={onBackToCart}>Повернутися до покупок</button>
        </div>
       
        <div className={css.orderSummary}>
            <h3>Ваше замовлення</h3>
            <ul>{cart.map((item, index) => <li key={index}>{item.name} {item.weight} x {item.quantity} - {item.pricePerUnit * item.quantity} грн </li>)}</ul>
            <p>Вартість: {totalPrice} грн</p>
        </div>
    </form>
  </div>
     );
};

OrderForm.propTypes = {
    cart: PropTypes.array.isRequired,
    onBackToCart: PropTypes.func.isRequired,
    onSubmitOrder: PropTypes.func.isRequired,
  };
  
  export default OrderForm;
