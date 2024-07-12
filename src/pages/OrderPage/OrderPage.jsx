import { useSelector } from 'react-redux'; 
import OrderForm from '../../components/OrderForm/OrderForm/OrderForm';
import Header from '../../components/OrderForm/Header/Header';



const OrderPage = () => {
  const cart = useSelector(state => state.cart);

  const handleBackToCart = () => {
    // Ваш код для возврата в корзину
  };

  const handleSubmitOrder = (formData) => {
    // Ваш код для обработки отправки заказа
  };

  

  return (
    <div>
      <Header />
      <div > 
        <OrderForm 
          cart={cart}
          onBackToCart={handleBackToCart}
          onSubmitOrder={handleSubmitOrder}
        />

      </div>
    </div>
  );
};

export default OrderPage;
