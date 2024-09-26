import css from './ProductDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setWeight,
  setQuantity,
  addToCart,
  updateCart,
} from '../../../redux/actions';
import WeightOptions from '../WeightOptions/WeightOptions';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

import 'overlayscrollbars/styles/overlayscrollbars.css';
import PropTypes from 'prop-types';
import {  useState} from 'react';
import CustomScrollWrapper from '../../OrderForm/shared/СustomScrollWrapper/СustomScrollWrapper';

const ProductDetails = ({ product, onCloseProduct }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) =>
    Array.isArray(state.cart) ? state.cart : []
  );

  const [quantity, setQuantityState] = useState(1);
 
 


  const weights = product.description.weights
    .split(', ')
    .reduce((acc, weight) => {
      const [amount, price] = weight.split(' - ');
      acc[amount] = parseInt(price.replace(' грн', ''), 10);
      return acc;
    }, {});

  const [selectedWeight, setSelectedWeight] = useState(Object.keys(weights)[0]);

  

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
    dispatch(setWeight(weight));
  };

  const handleQuantityChange = (quantity) => {
    setQuantityState(quantity);
    dispatch(setQuantity(quantity));
  };

  const handleAddToCart = () => {
    const existingItem = cart.find(
      (item) => item.weight === selectedWeight && item.title === product.title
    );

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.weight === selectedWeight && item.title === product.title
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      dispatch(updateCart(updatedCart));
    } else {
      if (cart.length >= 5) {
        return;
      }
      const item = {
        title: product.title,
        image: product.image,
        weight: selectedWeight,
        quantity: quantity,
        pricePerUnit: weights[selectedWeight],
      };
      console.log('Adding to cart item:', item);
      dispatch(addToCart(item));
    }
  };

  const disabledWeights = cart.map((item) => item.weight);

  const totalPrice = weights[selectedWeight] * quantity;

  return (
    <div className={css.productDetails}>
      <CustomScrollWrapper
       
      
      >
        <div className={css.descriptionArea}>
          {product.title && (
            <h3 className={css.productName}>{product.title}</h3>
          )}

          {product.description && product.description.descr && (
            <p className={css.productText}>{product.description.descr}</p>
          )}

          {product.description && product.description.flavor && (
            <p className={css.productText}>
              <span className={css.prodDescriptionHeader}>
                Смакові особливості :
              </span>{' '}
              {product.description.flavor}
            </p>
          )}

          {product.description && product.description.advantage && (
            <p className={css.productText}>
              <span className={css.prodDescriptionHeader}>
                Корисні властивості :
              </span>{' '}
              {product.description.advantage}
            </p>
          )}

          {product.description &&
            product.description.features &&
            product.description.features.length > 0 && (
              <p className={css.productText}>
                <span className={css.prodDescriptionHeader}>Особливості :</span>{' '}
                {product.description.features.join(', ')}
              </p>
            )}
        </div>
      </CustomScrollWrapper>
      <WeightOptions
        selectedWeight={selectedWeight}
        onWeightChange={handleWeightChange}
        disabledWeights={disabledWeights}
        category={product.category}
      />
      <QuantitySelector
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <AddToCartButton
        onAddToCart={handleAddToCart}
        totalPrice={totalPrice}
        onCloseProduct={onCloseProduct}
      />
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired, // Название продукта
    image: PropTypes.string.isRequired, // Изображение продукта
    category: PropTypes.string.isRequired, // Категория продукта
    description: PropTypes.shape({
      descr: PropTypes.oneOfType([
        PropTypes.string, // Может быть строкой
        PropTypes.arrayOf(PropTypes.string), // Или массивом строк
      ]).isRequired,
      flavor: PropTypes.string, // Смакові особливості
      advantage: PropTypes.string, // Корисні властивості
      features: PropTypes.arrayOf(PropTypes.string), // Особливості - массив строк
      weights: PropTypes.string.isRequired, // Веса и цены продукта
    }).isRequired,
  }).isRequired,
  onCloseProduct: PropTypes.func.isRequired, // Функция для закрытия продукта
};

export default ProductDetails;
