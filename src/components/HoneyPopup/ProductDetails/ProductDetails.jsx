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
  const [selectedWeight, setSelectedWeight] = useState(''); // Изменим начальное значение на пустое
  const [totalPrice, setTotalPrice] = useState(0);

  // Функция для получения цены по весу
  const getPriceByWeight = (weightsStr, weight) => {
    const weights = weightsStr.split(', ').reduce((acc, weight) => {
      const [amount, price] = weight.split(' - ');
      acc[amount] = parseInt(price.replace(' грн', ''), 10);
      return acc;
    }, {});
    return weights[weight] || 0; // Возвращаем цену для выбранного веса
  };

  // Инициализация состояния (вес и цена) при первой загрузке компонента
  useEffect(() => {
    if (product && honeyData.length > 0) {
      const currentProduct = honeyData.find((item) => item.id === product.id);
      if (currentProduct) {
        // Устанавливаем начальный вес только при первой загрузке
        if (!selectedWeight) {
          const initialWeight = currentProduct.description.weights
            .split(', ')[0]
            .split(' - ')[0];
          setSelectedWeight(initialWeight);
          const initialPrice = getPriceByWeight(
            currentProduct.description.weights,
            initialWeight
          );
          setTotalPrice(initialPrice * quantity);
        }
      }
    }
  }, [product, honeyData, selectedWeight, quantity]); // Добавляем зависимость от selectedWeight

  if (!product || honeyData.length === 0) {
    return <p>Загрузка данных...</p>;
  }

  const currentProduct = honeyData.find((item) => item.id === product.id);

  if (!currentProduct) {
    return <p>Товар не найден</p>;
  }

  // Обновление цены при изменении веса
  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
    dispatch(setWeight(weight)); // Диспатчим вес для Redux
    const price = getPriceByWeight(currentProduct.description.weights, weight);
    setTotalPrice(price * quantity); // Обновляем общую цену
  };

  // Обновление цены при изменении количества
  const handleQuantityChange = (newQuantity) => {
    setQuantityState(newQuantity);
    dispatch(setQuantity(newQuantity)); // Диспатчим количество для Redux
    const price = getPriceByWeight(
      currentProduct.description.weights,
      selectedWeight
    ); // Используем текущий вес
    setTotalPrice(price * newQuantity); // Обновляем общую цену
  };

  // Добавление товара в корзину
  const handleAddToCart = () => {
    const item = {
      title: currentProduct.title,
      image: currentProduct.image,
      weight: selectedWeight,
      quantity,
      pricePerUnit: getPriceByWeight(
        currentProduct.description.weights,
        selectedWeight
      ),
    };

    dispatch(addToCart(item)); // Добавляем товар в корзину
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
        selectedWeight={selectedWeight} // Передаем выбранный вес
        onWeightChange={handleWeightChange} // Обработчик изменения веса
        category={currentProduct.category}
      />
      <QuantitySelector
        quantity={quantity} // Передаем текущее количество
        onQuantityChange={handleQuantityChange} // Обработчик изменения количества
      />
      <AddToCartButton
        onAddToCart={handleAddToCart} // Обработчик добавления в корзину
        totalPrice={totalPrice} // Передаем рассчитанную общую цену
        onCloseProduct={onCloseProduct} // Обработчик закрытия попапа
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
