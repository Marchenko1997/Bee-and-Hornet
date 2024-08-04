import ProductDetails from "../ProductDetails/ProductDetails";
import css from "./Product.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Product = ({ product, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  });



  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closePopup(); // Закрытие попапа
    }
  };

  if (!product) return null;

  return (
    <div
      className={`${css.overlay} ${isClosing ? css.closing : ""}`}
      onClick={handleBackdropClick}
    >
      <div className={css.productContainer}>
        <button className={css.closeButton} onClick={onClose}>
       <svg className={css.modalCloseButtonIcon}>
         <use xlinkHref="../../../../public/icons/sprite.svg#cross-close" />
       </svg>
        </button>
        <div className={css.productImage}>
          <img src={product.image} alt={product.alt} />
        </div>
        <ProductDetails product={product} onCloseProduct={onClose} />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
   
    description: PropTypes.object.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Product;
