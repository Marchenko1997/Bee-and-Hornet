import css from './ProductDetails.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setWeight, setQuantity, addToCart } from '../../../redux/actions';
import WeightOptions from '../WeightOptions/WeightOptions';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import CustomScrollWrapper from '../../OrderForm/shared/СustomScrollWrapper/СustomScrollWrapper';
import PropTypes from 'prop-types';

const ProductDetails = ({ product, onCloseProduct, honeyData }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantityState] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('');
  const [totalPrice, setTotalPrice] = useState(0); // Хранение общей цены

  useEffect(() => {
    if (product && honeyData.length > 0) {
      const currentProduct = honeyData.find((item) => item.id === product.id);
      if (currentProduct) {
        const weights = currentProduct.description.weights
          .split(', ')
          .reduce((acc, weight) => {
            const [amount, price] = weight.split(' - ');
            acc[amount] = parseInt(price.replace(' грн', ''), 10);
            return acc;
          }, {});
        setSelectedWeight(Object.keys(weights)[0] || '');
        setTotalPrice(weights[Object.keys(weights)[0]] * quantity); // Устанавливаем общую цену
      }
    }
  }, [product, honeyData, quantity]); // Добавлено quantity в зависимости

  if (!product || honeyData.length === 0) {
    return <p>Загрузка данных...</p>;
  }

  const currentProduct = honeyData.find((item) => item.id === product.id);

  if (!currentProduct) {
    return <p>Товар не найден</p>;
  }

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
    dispatch(setWeight(weight));
    const price = currentProduct.description.weights
      .split(', ')
      .reduce((acc, w) => {
        const [amount, price] = w.split(' - ');
        acc[amount] = parseInt(price.replace(' грн', ''), 10);
        return acc;
      }, {})[weight];

    setTotalPrice(price * quantity); // Обновляем общую цену при изменении веса
  };

  const handleQuantityChange = (quantity) => {
    setQuantityState(quantity);
    dispatch(setQuantity(quantity));
    // Обновляем общую цену при изменении количества
    const price = currentProduct.description.weights
      .split(', ')
      .reduce((acc, w) => {
        const [amount, price] = w.split(' - ');
        acc[amount] = parseInt(price.replace(' грн', ''), 10);
        return acc;
      }, {})[selectedWeight];

    setTotalPrice(price * quantity);
  };

 const handleAddToCart = () => {
   const item = {
     title: currentProduct.title,
     image: currentProduct.image,
     weight: selectedWeight,
     quantity,
     pricePerUnit: currentProduct.description.weights
       .split(', ')
       .reduce((acc, weight) => {
         const [amount, price] = weight.split(' - ');
         acc[amount] = parseInt(price.replace(' грн', ''), 10);
         return acc;
       }, {})[selectedWeight], 
   };

   dispatch(addToCart(item));
 };

  return (
    <div className={css.productDetails}>
      <CustomScrollWrapper>
        <div className={css.descriptionArea}>
          <h3 className={css.productName}>{currentProduct.title}</h3>
          <p className={css.productText}>{currentProduct.description.descr}</p>
          <p className={css.productText}>
            Смакові особливості: {currentProduct.description.flavor}
          </p>
          <p className={css.productText}>
            Корисні властивості: {currentProduct.description.advantage}
          </p>
          <p className={css.productText}>
            Особливості: {currentProduct.description.features?.join(', ')}
          </p>
        </div>
      </CustomScrollWrapper>
      <WeightOptions
        selectedWeight={selectedWeight}
        onWeightChange={handleWeightChange}
        category={currentProduct.category}
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.shape({
      descr: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      flavor: PropTypes.string,
      advantage: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string),
      weights: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onCloseProduct: PropTypes.func.isRequired,
  honeyData: PropTypes.array.isRequired,
};

export default ProductDetails;
