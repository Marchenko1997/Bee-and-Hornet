import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/OrderForm/Header/Header";
import CartPopup from "../../components/BuyingPopup/CartPopup/CartPopup/CartPopup";
import Product from "../../components/HoneyPopup/Product/Product";
import css from "./MainPage.module.css";
import OurHoney from "../../components/MainPage/OurHoney/OurHoney";
import OurProducts from "../../components/MainPage/OurProducts/OurProducts";
import AboutUs from "../../components/AboutUs/AboutUs";
import Feedback from "../../components/Feedbacks/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import HoneyHistory from "../../components/MainPage/HoneyHistory/HoneyHistory";

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCloseAllPopups = () => {
    navigate("/");
    setSelectedProduct(null);
  };

  const query = new URLSearchParams(location.search);
  const popup = query.get("popup");

  const isCartPopupOpen = popup === "cart";
  const isProductPopupOpen = popup === "product" && selectedProduct;

  return (
    <>
      <div className={css.mainPage}>
        <Header />
       <HoneyHistory />
        <OurHoney />
        <OurProducts />
        <AboutUs />
        <Feedback />

        {isCartPopupOpen && <CartPopup onClose={handleCloseAllPopups} />}
        {isProductPopupOpen && selectedProduct && (
          <Product product={selectedProduct} onClose={handleCloseAllPopups} />
        )}
       </div> 
      {/* <div className={css.footer}>  */}
        <Footer />
      {/* </div> */}
    </>
  );
};

export default MainPage;
