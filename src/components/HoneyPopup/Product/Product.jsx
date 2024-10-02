import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Product.module.css';
import ProductDetails from '../ProductDetails/ProductDetails';
import { icons } from '../../../../public/icons/index';
import { useModal } from '../../../context/useModal';

const Product = ({ product, honeyData, onClose, onCartClick }) => {
  const closeModal = useModal();

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
    closeModal();
    document.body.style.overflow = 'auto';
    onClose();
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  if (!product) return null;

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.productContainer}>
        <button className={css.closeButton} onClick={closePopup}>
          <svg className={css.modalCloseButtonIcon}>
            <use xlinkHref={`${icons}#cross-close`} />
          </svg>
        </button>
        <div className={css.productImage}>
          <img src={product.image} alt={product.alt} />
        </div>
        <ProductDetails
          product={product}
          honeyData={honeyData}
          onCloseProduct={closePopup}
          onCartClick={onCartClick}
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
  }).isRequired,
  honeyData: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired, 
  onCartClick: PropTypes.func.isRequired,
};

export default Product;
