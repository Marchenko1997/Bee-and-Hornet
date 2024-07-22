import css from "./ProductDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setWeight, setQuantity, addToCart, updateCart } from "../../../redux/actions";
import WeightOptions from "../WeightOptions/WeightOptions";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/styles/overlayscrollbars.css";
import PropTypes from 'prop-types';
import { useEffect } from "react";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("Product Details Component Rendered with product:", product);
  }, [product]);

  const handleWeightChange = (weight) => {
    dispatch(setWeight(weight));
  };

  const handleQuantityChange = (quantity) => {
    dispatch(setQuantity(quantity));
  };

  const handleAddToCart = () => {
    const existingItem = cart.find(item => item.weight === product.weight);

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.weight === product.weight ? { ...item, quantity: item.quantity + product.quantity } : item
      );
      dispatch(updateCart(updatedCart));
    } else {
      if (cart.length >= 5) {
        return;
      }
      const item = {
        title: product.title,
        image: product.image,
        weight: product.weight,
        quantity: product.quantity,
        pricePerUnit: product.pricePerUnit,
      };
      console.log("Adding to cart item:", item);
      dispatch(addToCart(item));
    }
  };

  const disabledWeights = cart.map(item => item.weight);

  const totalPrice = product.pricePerUnit * product.quantity;

  return (
    <div className={css.productDetails}>
      <h1 className={css.productTitle}>{product.title}</h1>
      <OverlayScrollbarsComponent className={css.containerScrollBar}>
        <div className={css.scrollBar}>
          <p className={css.productDescription}>
            {product.description && product.description.features ? product.description.features.join(' ') : 'Описание отсутствует'}
          </p>
        </div>
      </OverlayScrollbarsComponent>
      <WeightOptions
        selectedWeight={product.weight}
        onWeightChange={handleWeightChange}
        disabledWeights={disabledWeights}
      />
      {product.quantity !== undefined && (
        <QuantitySelector
          quantity={product.quantity}
          onQuantityChange={handleQuantityChange}
        />
      )}

      <AddToCartButton onAddToCart={handleAddToCart} totalPrice={totalPrice} />
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    weight: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    pricePerUnit: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetails;
