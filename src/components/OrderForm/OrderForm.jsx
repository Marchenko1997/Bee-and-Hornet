import PropTypes from "prop-types";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "overlayscrollbars/overlayscrollbars.css";
import css from "./OrderForm.module.css";

const OrderForm = ({ cart, onBackToCart, onSubmitOrder }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    deliveryMethod: "Відділення",
    city: "",
    branch: "",
    comment: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(
      "Будь ласка, введіть коректне ім’я кирилицею"
    ),
    lastName: Yup.string().required(
      "Будь ласка, введіть коректне прізвище кирилицею"
    ),
    phone: Yup.string().required("Введіть коректний номер мобільного телефону"),
    city: Yup.string().required("Оберіть населений пункт"),
    branch: Yup.string().required("Обрати відділення"),
  });

  const handleSubmit = (values) => {
    onSubmitOrder(values);
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
            <svg className={css.svgLogo}>
              <use xlinkHref="/assets/sprite-BCsPqWkB.svg#logo"></use>
            </svg>
            <p>Бджола та Шершень</p>
          </a>
        </div>
      </div>
      <div className={css.container}>
        <h2 className={css.mainTitle}>Оформлення замовлення</h2>
        <div className={css.content}>
          <div className={css.orderForm}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className={css.form}>
                  <div className={css.contactInfo}>
                    <h3 className={css.contactInfoTitle}>Контактні дані:</h3>
                    <div className={css.inputWrapper}>
                      <label className={css.inputlabel}>
                        Ім'я
                        <Field
                          className={css.inputContactInfo}
                          type="text"
                          name="firstName"
                          placeholder="Ім'я"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="span"
                          className={css.errorMessage}
                        />
                      </label>

                      <label className={css.inputlabel}>
                        Прізвище
                        <Field
                          className={css.inputContactInfo}
                          type="text"
                          name="lastName"
                          placeholder="Прізвище"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="span"
                          className={css.errorMessage}
                        />
                      </label>
                      <label className={css.inputlabel}>
                        Телефон
                        <Field
                          className={css.inputContactInfo}
                          type="text"
                          name="phone"
                          placeholder="+380"
                        />
                        <ErrorMessage
                          name="phone"
                          component="span"
                          className={css.errorMessage}
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
                        <Field
                          as="select"
                          name="deliveryMethod"
                          className={css.inputContactInfo}
                        >
                          <option value="Відділення">
                            Доставка до відділення
                          </option>
                          <option value="Двері">Доставка до дверей</option>
                        </Field>
                      </label>
                      <label>
                        <Field
                          as="select"
                          name="city"
                          className={css.inputContactInfo}
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
                        </Field>
                        <ErrorMessage
                          name="city"
                          component="span"
                          className={css.errorMessage}
                        />
                      </label>
                      <label>
                        <Field
                          as="select"
                          name="branch"
                          className={css.inputContactInfo}
                        >
                          <option value="">Обрати відділення</option>
                          {/* Добавьте варианты для отделений здесь */}
                        </Field>
                        <ErrorMessage
                          name="branch"
                          component="span"
                          className={css.errorMessage}
                        />
                      </label>
                      <label>
                        <Field
                          as="textarea"
                          name="comment"
                          placeholder="Додати коментар до замовлення"
                          className={css.inputContactInfo}
                        />
                      </label>
                    </div>
                  </div>
                  <p className={css.useAgreement}>
                    Підтверджуючи замовлення, ви даєте згоду на обробку своїх
                    персональних даних відповідно до Закону України «Про захист
                    персональних даних»
                  </p>
                  <button type="submit" className={css.submitButton}>
                    Оформити замовлення
                  </button>
                </Form>
              )}
            </Formik>
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
            <h3>Ваше замовлення:</h3>
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
    </div>
  );
};

OrderForm.propTypes = {
  cart: PropTypes.array.isRequired,
  onBackToCart: PropTypes.func.isRequired,
  onSubmitOrder: PropTypes.func.isRequired,
};

export default OrderForm;
