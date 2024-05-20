import { useState } from "react";
import css from "./PopUp.module.css";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const increaceQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
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
              <div className={css.containerScrollBar}>
              <div className={css.scrollBar}>
                <p className={css.productDescription}>
                  Кришталево прозорий рідкий світло-золотявого кольору мед з
                  ніжним ароматом білої акації Смакові особливості: нейтральної
                  солодкості, з кислинкою і ніжним ароматом цвітіння білої
                  акації Корисні властивості: антисептична та протибактеріальна
                  дія, нормалізація тиску, розширення судин, зміцнення
                  імунітету, має гіпоалергенні властивості, містить велику
                  концентрацію антиоксидантів Особливості: єдиний сорт меду,
                  який зберігає рідкий стан і не має терміну придатності при
                  правильному зберіганні, також єдиний сорт меду, який має
                  гіпоалергенні властивості.{" "}
                </p>
              </div>
              </div>
             

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
                    <button
                      className={css.quantityDecrease}
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <span className={css.quantityNumber}>{quantity}</span>
                    <button
                      className={css.quantityIncrease}
                      onClick={increaceQuantity}
                    >
                      +
                    </button>
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
