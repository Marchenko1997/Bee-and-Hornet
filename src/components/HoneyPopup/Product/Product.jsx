import ProductDetails from '../ProductDetails/ProductDetails';
import css from './Product.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Product = ({ product, onClose, honeyData }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  if (!product) return null; // Проверка на наличие продукта

  return (
    <div
      className={`${css.overlay} ${isClosing ? css.closing : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={css.productContainer}>
        <button className={css.closeButton} onClick={closePopup}>
          <svg className={css.modalCloseButtonIcon}>
            <use xlinkHref="../../../../public/icons/sprite.svg#cross-close" />
          </svg>
        </button>
        <div className={css.productImage}>
          <img src={product.image} alt={product.alt} />
        </div>
        <ProductDetails
          product={product}
          onCloseProduct={closePopup}
          honeyData={honeyData} // Передаем honeyData сюда
        />
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
  honeyData: PropTypes.array.isRequired, // Добавлено для проверки
};

export default Product;
