import ProductDetails from "../ProductDetails/ProductDetails";
import css from "./Product.module.css";
import { useState } from "react";

const Product = () => {
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
    <ProductDetails />
    </div>
    )}
    </>
  );
};

export default Product