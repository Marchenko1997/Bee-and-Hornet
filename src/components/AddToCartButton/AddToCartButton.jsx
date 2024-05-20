import css from './AddToCartButton.module.css'
import PropTypes from 'prop-types';

const AddToCartButton = ({onAddToCart}) => {
  return (
    <div> <button className={css.addToCart} onClick={onAddToCart}>Додати в кошик</button></div>
  )
}

AddToCartButton.propTypes = {
    onAddToCart: PropTypes.func.isRequired, // onAddToCart должен быть функцией и обязательным
  };

export default AddToCartButton