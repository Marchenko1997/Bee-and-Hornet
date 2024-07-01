
import { useSelector } from 'react-redux'; // Предполагается, что данные корзины находятся в redux store
import OrderForm from '../OrderForm';

const OrderPage = () => {
  const cart = useSelector(state => state.cart); // Замените на вашу реальную структуру состояния

  const handleBackToCart = () => {
    // Реализуйте навигацию обратно к корзине
  };

  const handleSubmitOrder = (formData) => {
    // Реализуйте логику отправки заказа
  };

  return (
    <OrderForm
      cart={cart}
      onBackToCart={handleBackToCart}
      onSubmitOrder={handleSubmitOrder}
    />
  );
};

export default OrderPage;
