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
            <div className={css.productDetails}>
              <button className={css.closeButton} onClick={closePopup}>
                &times;
              </button>

              <h1 className={css.productTitle}>Мед акацієвий натуральний</h1>

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
                <span>Кількість</span>
                <div className={css.quantityControls}>
                  <button className={css.quantityDecrease}>-</button>
                  <span className={css.quantityNumber}>1</span>
                  <button className={css.quantityIncrease}>+</button>
                </div>
              </div>
              <div className={css.productPrice}>100 грн</div>
              <button className={css.addToCart}>Додати в кошик</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
