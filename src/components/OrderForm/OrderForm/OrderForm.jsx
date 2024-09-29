import PropTypes from 'prop-types';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'overlayscrollbars/overlayscrollbars.css';
import css from './OrderForm.module.css';
import Header from '../Header/Header';
import ContactInfo from '../ContactInfo/ContactInfo';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import OrderSummary from '../OrderSummary/OrderSummary';
import { toast } from 'react-toastify';
import Toastify from '../shared/Toastify/Toastify';
import ThanksForOrder from '../../ThanksForOrder/ThanksForOrder';
import { sendMessageTg } from '../../../services/tgApi';

const OrderForm = ({ cart, onBackToCart, onSubmitOrder }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    deliveryMethod: 'Відділення',
    city: '',
    branch: '',
    comment: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(
      'Будь ласка, введіть коректне ім’я кирилицею'
    ),
    lastName: Yup.string().required(
      'Будь ласка, введіть коректне прізвище кирилицею'
    ),
    phone: Yup.string().required('Введіть коректний номер мобільного телефону'),
    city: Yup.string(),
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.pricePerUnit * item.quantity,
    0
  );

  const handleSubmit = async (
    values,
    { setSubmitting, setErrors, resetForm }
  ) => {
    const orderDetails = {
      products: cart.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.pricePerUnit,
      })),
      totalPrice,
      ...values,
    };

    try {
      const result = await sendMessageTg(orderDetails);
      toast.success('Замовлення успішно оформлено!');
      onSubmitOrder(values);
      resetForm();
      setIsModalOpen(true);
      return result;
    } catch (error) {
      toast.error('Виникла помилка при оформленні замовлення!');
      setErrors({ submit: 'Помилка при відправці даних' });
    }

    setSubmitting(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.pageContainer}>
      <Header />
      <div className={css.container}>
        <h2 className={css.mainTitle}>Оформлення замовлення</h2>
        <div className={css.content}>
          <div className={css.orderForm}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, formikBag) => {
                handleSubmit(values, formikBag);
              }}
            >
              {() => (
                <Form className={css.form}>
                  <ContactInfo />
                  <DeliveryInfo />
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
          <OrderSummary
            cart={cart}
            onBackToCart={onBackToCart}
            totalPrice={totalPrice}
          />
        </div>
      </div>
      <Toastify />
      {isModalOpen && <ThanksForOrder handleClose={closeModal} />}
    </div>
  );
};

OrderForm.propTypes = {
  cart: PropTypes.array.isRequired,
  onBackToCart: PropTypes.func.isRequired,
  onSubmitOrder: PropTypes.func.isRequired,
};

export default OrderForm;
