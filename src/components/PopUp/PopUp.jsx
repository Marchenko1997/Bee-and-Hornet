import { useState } from "react";
import css from "./PopUp.module.css";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openPopup}>Открыть окно</button>
      {isOpen && (
        <div className={css.overlay}>
          <div className={css.productContainer}>
            <div className={css.productImage}>
              <img
                src="../../../public/img/honeyAcazion.png"
                alt="Мед акацієвий натуральний"
              />
            </div>
            <button className={css.closeButton} onClick={closePopup}>
                &times;
              </button>
           
            <div className={css.productDetails}>
    
            <h1 className={css.productTitle}>Мед акацієвий натуральний</h1>
            
              <div className={css.qualityDetails}>
              <div className={css.productWeight}>
                <span>Вага</span>
                <div className={css.weightOptions}>
                  <button>0,25 л</button>
                  <button>0,5 л</button>
                  <button>1,0 л</button>
                  <button>2,0 л</button>
                  <button>3,0 л</button>
                </div>
              </div>
              <div className={css.productQuantity}>
                <span className={css.quantity}>Кількість</span>
                <div className={css.quantityControls}>
                  <button className={css.quantityDecrease}>-</button>
                  <span className={css.quantityNumber}>1</span>
                  <button className={css.quantityIncrease}>+</button>
                </div>
              </div>
              <div className={css.productPriceContainer}>
                <span className={css.productPrice}>100 грн</span>
                <button className={css.addToCart}>Додати в кошик</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
