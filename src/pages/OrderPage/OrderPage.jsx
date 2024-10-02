import { useSelector } from 'react-redux'; 
import OrderForm from '../../components/OrderForm/OrderForm/OrderForm';
import Header from '../../components/OrderForm/Header/Header';
import CartPopup from '../../components/BuyingPopup/CartPopup/CartPopup/CartPopup';
import { useState } from 'react';



const OrderPage = () => {
  const cart = useSelector(state => state.cart);
   const [isCartPopupOpen, setCartPopupOpen] = useState(false);

  const handleBackToCart = () => {
    // Ваш код для возврата в корзину
  };

  const handleSubmitOrder = (formData) => {
    // Ваш код для обработки отправки заказа
  };

   const handleOpenCartPopup = () => {
     setCartPopupOpen(true); // Открытие модального окна корзины
   };

   const handleCloseCartPopup = () => {
     setCartPopupOpen(false); // Закрытие модального окна корзины
   };

  

  return (
    <div>
      <Header onCartClick={handleOpenCartPopup} />
      <div>
        <OrderForm
          cart={cart}
          onBackToCart={handleBackToCart}
          onSubmitOrder={handleSubmitOrder}
        />
      </div>
      {isCartPopupOpen && <CartPopup onClose={handleCloseCartPopup} />}
    </div>
  );
};

export default OrderPage;
