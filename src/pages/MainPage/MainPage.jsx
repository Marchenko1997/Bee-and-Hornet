import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/OrderForm/Header/Header';
import CartPopup from '../../components/BuyingPopup/CartPopup/CartPopup/CartPopup';
import Product from '../../components/HoneyPopup/Product/Product';
import css from './MainPage.module.css';
import OurHoney from '../../components/MainPage/OurHoney/OurHoney';
import OurProducts from '../../components/MainPage/OurProducts/OurProducts';
import AboutUs from '../../components/AboutUs/AboutUs';
import Feedback from '../../components/Feedbacks/Feedback/Feedback';
import Footer from '../../components/Footer/Footer';
import HoneyHistory from '../../components/MainPage/HoneyHistory/HoneyHistory';
import Toastify from '../../components/OrderForm/shared/Toastify/Toastify';

const MainPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartPopupOpen, setCartPopupOpen] = useState(false);

  const honeyData = useSelector((state) => state.honey.honey);

  const handleCloseAllPopups = () => {
    setSelectedProduct(null);
    setCartPopupOpen(false);
  };

  const handleOpenProductPopup = (product) => {
    setSelectedProduct(product); 
  };

  const handleOpenCartPopup = () => {
    setCartPopupOpen(true); 
  };

  return (
    <>
      <div className={css.mainPage}>
        <Header onCartClick={handleOpenCartPopup} />
        <HoneyHistory />
        <OurHoney />
        <OurProducts onProductClick={handleOpenProductPopup} />
        <AboutUs />
        <Feedback />

        {isCartPopupOpen && <CartPopup onClose={handleCloseAllPopups} />}
        {selectedProduct && (
          <Product
            product={selectedProduct}
            honeyData={honeyData}
            onClose={handleCloseAllPopups}
            onCartClick={handleOpenCartPopup}
          />
        )}
      </div>

      <Footer />
      <Toastify />
    </>
  );
};

export default MainPage;
