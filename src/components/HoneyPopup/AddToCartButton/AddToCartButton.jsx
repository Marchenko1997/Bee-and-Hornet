import css from './AddToCartButton.module.css'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState} from 'react';
import CartPopup from '../../BuyingPopup/CartPopup/CartPopup';

const AddToCartButton = ({onAddToCart}) => {

  const[isCartPopupOpen, setIsCartPopupOpen] =  useState(false);
  const cart = useSelector(state => state.cart);


  const handleCartClick = () => {
    setIsCartPopupOpen(!isCartPopupOpen);
  }
  return (
    <div className={css.productPriceContainer}> 
    <div className={css.shopCard}>
      { cart.length > 0 && <div className={css.basketContainer}>
        <svg className={css.basketIcon} onClick={handleCartClick}>
        <use xlinkHref="../../../public/icons/sprite.svg#basket"></use>

        </svg>
        <span className={css.basketCardSircle} onClick ={handleCartClick}>
        <span className={css.basketQuantity}>{cart.length}</span>
        </span>
      </div>}
     
    </div>
    <button className={css.addToCart} onClick={onAddToCart}>Додати в кошик</button>
    {isCartPopupOpen && <CartPopup onClose = {handleCartClick} />}
    </div>
  )
}

AddToCartButton.propTypes = {
    onAddToCart: PropTypes.func.isRequired, // onAddToCart должен быть функцией и обязательным
  };

export default AddToCartButton