import css from "./AddToCartButton.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartPopup from "../../BuyingPopup/CartPopup/CartPopup/CartPopup";

const AddToCartButton = ({ onAddToCart, totalPrice }) => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleCartClick = () => {
    setIsCartPopupOpen(!isCartPopupOpen);
  };

  const handleClosePopup = () => {
    setIsCartPopupOpen(false);
  };

  return (
    <div className={css.basementContainer}>
      <div className={css.productPriceContainer}>
        <div className={css.productPurchase}>
          <span className={css.productPrice}>{totalPrice} грн</span>
        </div>
        <div className={css.buttonAndIconContainer}>
          
          <div className={css.shopCard}>
            {cart.length > 0 && (
              <div className={css.basketContainer}>
                <svg className={css.basketIcon} onClick={handleCartClick}>
                  <use xlinkHref="../../../public/icons/sprite.svg#basket"></use>
                </svg>
                <span
                  className={css.basketCardSircle}
                  onClick={handleCartClick}
                >
                  <span className={css.basketQuantity}>
                    {Math.min(cart.length, 5)}
                  </span>
                </span>
              </div>
            )}
          </div>
          <button className={css.addToCart} onClick={onAddToCart}>
            Додати в кошик
          </button>
        </div>

        {isCartPopupOpen && <CartPopup onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

AddToCartButton.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default AddToCartButton;
