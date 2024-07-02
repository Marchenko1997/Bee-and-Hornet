import { useState } from "react";
import PropTypes from "prop-types";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import css from "./OrderForm.module.css";

const OrderForm = ({ cart, onBackToCart, onSubmitOrder }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    deliveryMethod: "Відділення",
    city: "",
    branch: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOrder(formData);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.pricePerUnit * item.quantity,
    0
  );

  return (
    <div className={css.pageContainer}>
      <div className={css.orderHeader}>
        <div className={css.containerHeader}>
          <a href="" className={css.orderLogo}>
            <svg className={css.svgLogo}><use xlinkHref="/assets/sprite-BCsPqWkB.svg#logo"></use></svg>
            <p>Бджола та Шершень</p>
          </a>
        </div>
      </div>
      {/* <section className={css.orderSection}> */}
      <div className={css.container}>
        <h2 className={css.mainTitle}>Оформлення замовлення</h2>
        <div className={css.content}>
          <div className={css.orderForm}>
            <form onSubmit={handleSubmit} className={css.form}>
              <div className={css.contactInfo}>
                <h3 className={css.contactInfoTitle}>Контактні дані:</h3>
                <div className={css.inputWrapper}>
                  <label className={css.inputlabel}>
                    Ім'я
                    <input
                      className={css.inputContactInfo}
                      type="text"
                      name="firstName"
                      placeholder="Ім'я"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <span className={css.errorMessage}>
                      Будь ласка, введіть коректне ім’я кирилицею
                    </span>
                  </label>

                  <label className={css.inputlabel}>
                    Прізвище
                    <input
                      className={css.inputContactInfo}
                      type="text"
                      name="lastName"
                      placeholder="Прізвище"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    <span className={css.errorMessage}>
                      Будь ласка, введіть коректне прізвище кирилицею
                    </span>
                  </label>
                  <label className={css.inputlabel}>
                    Телефон
                    <input
                      className={css.inputContactInfo}
                      type="text"
                      name="phone"
                      placeholder="+380"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className={css.deliveryInfo}>
                <h3 className={css.deliveryTitle}>
                  Вкажіть адресу доставки (Нова пошта):
                </h3>
                <div className={css.deliverySelection}>
                  <label>
                    <select
                      name="deliveryMethod"
                      value={formData.deliveryMethod}
                      onChange={handleChange}
                    >
                      <option value="Відділення">Доставка до відділення</option>
                      <option value="Двері">Доставка до дверей</option>
                    </select>
                  </label>
                  <label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Оберіть населений пункт</option>
                      <option value="Київ, Київська обл.">
                        м. Київ, Київська обл.
                      </option>
                      <option value="Дніпро, Дніпропетровська обл.">
                        м. Дніпро, Дніпропетровська обл.
                      </option>
                      <option value="Харків, Харківська обл.">
                        м. Харків, Харківська обл.
                      </option>
                      <option value="Запоріжжя, Запорізька обл.">
                        м. Запоріжжя, Запорізька обл.
                      </option>
                      <option value="Одеса, Одеська обл.">
                        м. Одеса, Одеська обл.
                      </option>
                      <option value="Кривий Ріг, Дніпропетровська обл.">
                        м. Кривий Ріг, Дніпропетровська обл.
                      </option>
                      <option value="Львів, Львівська обл.">
                        м. Львів, Львівська обл.
                      </option>
                      <option value="Вінниця, Вінницька обл.">
                        м. Вінниця, Вінницька обл.
                      </option>
                    </select>
                  </label>
                  <label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Обрати відділення</option>
                      {/* Добавьте варианты для отделений здесь */}
                    </select>
                  </label>
                  <label>
                    <textarea
                      name="comment"
                      placeholder="Додати коментар до замовлення"
                      value={formData.comment}
                      onChange={handleChange}
                    ></textarea>
                  </label>
                </div>
              </div>
              <p className={css.useAgreement}>Підтверджуючи замовлення, ви даєте згоду на обробку своїх персональних даних відповідно до Закону України «Про захист персональних даних»</p>
            <button type="submit" className={css.submitButton}>
              Оформити замовлення
            </button>
            </form>
          
          </div>
          <div className={css.orderSummary}>
            <div className={css.backButtonContainer}>
              <button
                type="button"
                onClick={onBackToCart}
                className={css.backButton}
              >
                Повернутися до покупок
              </button>
            </div>
            <h3 >Ваше замовлення:</h3>
            <OverlayScrollbarsComponent
              className={css.scrollWrapper}
              options={{ scrollbars: { autoHide: "scroll" } }}
            >
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className={css.orderItem}>
                    <img
                      className={css.itemImg}
                      src="../../../public/img/honeyAcazion.png"
                      alt="Мед акацієвий"
                    />
                    <span>
                      {item.name} {item.weight} x {item.quantity} -{" "}
                      {item.pricePerUnit * item.quantity} грн
                    </span>
                  </li>
                ))}
              </ul>
            </OverlayScrollbarsComponent>
            <p className={css.totalPrice}>Вартість: {totalPrice} грн</p>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
};

OrderForm.propTypes = {
  cart: PropTypes.array.isRequired,
  onBackToCart: PropTypes.func.isRequired,
  onSubmitOrder: PropTypes.func.isRequired,
};

export default OrderForm;
