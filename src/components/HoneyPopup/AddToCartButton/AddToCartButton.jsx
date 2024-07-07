import css from './AddToCartButton.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CartPopup from '../../BuyingPopup/CartPopup/CartPopup/CartPopup';

const AddToCartButton = ({ onAddToCart }) => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const cart = useSelector(state => state.cart);

  const handleCartClick = () => {
    setIsCartPopupOpen(!isCartPopupOpen);
  };

  const handleClosePopup = () => {
    setIsCartPopupOpen(false);
  };

  return (
    <div className={css.productPriceContainer}> 
      <div className={css.shopCard}>
        {cart.length > 0 && (
          <div className={css.basketContainer}>
            <svg className={css.basketIcon} onClick={handleCartClick}>
              <use xlinkHref="../../../public/icons/sprite.svg#basket"></use>
            </svg>
            <span className={css.basketCardSircle} onClick={handleCartClick}>
              <span className={css.basketQuantity}>{Math.min(cart.length, 5)}</span>
            </span>
          </div>
        )}
      </div>
      <button className={css.addToCart} onClick={onAddToCart}  >Додати в кошик</button>
      {isCartPopupOpen && <CartPopup onClose={handleClosePopup} />}
    </div>
  );
};

AddToCartButton.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default AddToCartButton;
