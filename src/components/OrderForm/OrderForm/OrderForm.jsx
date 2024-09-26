import PropTypes from 'prop-types';
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

const OrderForm = ({ cart, onBackToCart, onSubmitOrder }) => {
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
    firstName: Yup.string().required('Будь ласка, введіть коректне ім’я кирилицею'),
    lastName: Yup.string().required('Будь ласка, введіть коректне прізвище кирилицею'),
    phone: Yup.string().required('Введіть коректний номер мобільного телефону'),
    city: Yup.string().required('Оберіть населений пункт'),
  });

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    try {
      onSubmitOrder(values);
      toast.success('Замовлення успішно оформлено!');
    } catch (error) {
      toast.error('Виникла помилка при оформленні замовлення!');
      setErrors({ submit: 'Помилка при відправці даних' });
    }
    setSubmitting(false);
  }

  const totalPrice = cart.reduce((total, item) => total + item.pricePerUnit * item.quantity, 0);

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
              onSubmit={handleSubmit}
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
    </div>
  );
};

OrderForm.propTypes = {
  cart: PropTypes.array.isRequired,
  onBackToCart: PropTypes.func.isRequired,
  onSubmitOrder: PropTypes.func.isRequired,
};

export default OrderForm;
