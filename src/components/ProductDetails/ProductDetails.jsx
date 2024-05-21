// ProductDetails.jsx
import css from './ProductDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setWeight, setQuantity, addToCart } from '../../redux/actions';
import WeightOptions from '../WeightOptions/WeightOptions';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const cart = useSelector(state => state.cart);

  const handleWeightChange = (weight) => {
      dispatch(setWeight(weight));
  };

  const handleQuantityChange = (quantity) => {
      dispatch(setQuantity(quantity));
  };

  const handleAddToCart = () => {
      const item = {
          weight: product.weight,
          quantity: product.quantity,
          pricePerUnit: product.pricePerUnit * product.quantity,
      };
      dispatch(addToCart(item));
  };

  const totalPrice = product.pricePerUnit * product.quantity;

  return (
      <div className={css.productDetails}>
          <h1 className={css.productTitle}>Мед акацієвий натуральний</h1>
          <div className={css.containerScrollBar}>
              <div className={css.scrollBar}>
                  <p className={css.productDescription}>
                      Кришталево прозорий рідкий світло-золотявого кольору мед з
                      ніжним ароматом білої акації Смакові особливості: нейтральної
                      солодкості, з кислинкою і ніжним ароматом цвітіння білої
                      акації Корисні властивості: антисептична та протибактеріальна
                      дія, нормалізація тиску, розширення судин, зміцнення
                      імунітету, має гіпоалергенні властивості, містить велику
                      концентрацію антиоксидантів Особливості: єдиний сорт меду,
                      який зберігає рідкий стан і не має терміну придатності при
                      правильному зберіганні, також єдиний сорт меду, який має
                      гіпоалергенні властивості.
                  </p>
              </div>
          </div>
          <WeightOptions selectedWeight={product.weight} onWeightChange={handleWeightChange} />
          {product.quantity !== undefined && (
              <QuantitySelector quantity={product.quantity} onQuantityChange={handleQuantityChange} />
          )}
          <div className={css.productPurchase}>
              <span className={css.productPrice}>{totalPrice} грн</span>
              {cart.length > 0 && (
                  <div className={css.cartIcon}>
                      <span>{cart.length}</span>
                  </div>
              )}
              <AddToCartButton onAddToCart={handleAddToCart} />
          </div>
      </div>
  );
};

export default ProductDetails;
