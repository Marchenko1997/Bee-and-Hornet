import { useSelector } from 'react-redux';
import OrderForm from '../../components/OrderForm/OrderForm/OrderForm';
import Header from '../../components/OrderForm/Header/Header';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

   const handleBackToCart = () => {
     navigate('/cart');
  };
  
  const handleOrderSubmit = (orderData) => {
    console.log('Order submitted:', orderData);
   
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <>
      <Header onCartClick={handleCartClick} />
      <OrderForm cart={cart} onBackToCart={handleBackToCart}  onSubmitOrder={handleOrderSubmit}/>
    </>
  );
};

export default OrderPage;
