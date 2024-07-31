import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../OrderForm/Header/Header";
import CartPopup from "../../components/BuyingPopup/CartPopup/CartPopup/CartPopup";
import Product from "../HoneyPopup/Product/Product";
import css from "./MainPage.module.css";
import honeyImage1 from "./images/honey-desktop.jpeg";
import honeyImage2 from "./images/honeycomb-desktop.jpeg";
import OurHoney from "./OurHoney/OurHoney";
import OurProducts from "./OurProducts/OurProducts";
import AboutUs from "../AboutUs/AboutUs";
import Feedback from "../Feedbacks/Feedback/Feedback";


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
    <div className={css.mainPage}>
      <Header />
      <section className={css.heroSection}>
        <div className={css.heroContent}>
          <h1>
            Натуральний мед <br /> з сімейною історією
          </h1>
          <div className={css.wrapperInfo}>
            <p className={css.mainQuotes}>
              {" "}
              <span className={css.mainQuotesSpan}>
                «Видно, що ви без пуття закохані в той мед». <br />
              </span>{" "}
              Григорій Сковорода, байка «Бджола та Шершень». Точніше нашу
              сімейну любов до цієї справи не описати!
            </p>
            <div className={css.images}>
              <picture>
                <source
                  srcSet={`${honeyImage2} 1x, ${honeyImage2} 2x`}
                  media="(min-width: 800px)"
                />
                <img
                  src={honeyImage2}
                  alt="Honeycomb"
                  className={css.honeyImageTwo}
                />
              </picture>
              <picture>
                <source
                  srcSet={`${honeyImage1} 1x, ${honeyImage1} 2x`}
                  media="(min-width: 800px)"
                />
                <img
                  src={honeyImage1}
                  alt="Honey"
                  className={css.honeyImageOne}
                />
              </picture>
            </div>
            <div className={css.socialLinks}>
              <div className={css.buttonContainer}>
                <a href="" className={css.orderButton}>
                  <svg className={css.iconPolygon}>
                    <use xlinkHref="../../../public/icons/sprite.svg#polygon"></use>
                  </svg>
                  <p className={css.iconPolygonText}>Замовити</p>
                </a>
              </div>
              <a
                href="https://t.me/bdzhola_ta_shershen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={css.icon}>
                  <use xlinkHref="/icons/sprite.svg#telegram"></use>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bdzhola_ta_shershen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={css.icon}>
                  <use xlinkHref="/icons/sprite.svg#instagram"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <OurHoney />
      <OurProducts />
     <AboutUs/>
      <Feedback />
      <footer className={css.footer}>
        <p>Бджола та Шершень</p>
        <p>Email: plokhaanastasiia@gmail.com</p>
        <p>Phone: +38 096 888 07 39</p>
        <p>Created by GoIT</p>
      </footer>

      {isCartPopupOpen && <CartPopup onClose={handleCloseAllPopups} />}
      {isProductPopupOpen && selectedProduct && (
        <Product product={selectedProduct} onClose={handleCloseAllPopups} />
      )}
    </div>
  );
};

export default MainPage;
