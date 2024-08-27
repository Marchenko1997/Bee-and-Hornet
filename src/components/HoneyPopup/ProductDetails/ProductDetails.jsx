import css from "./ProductDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setWeight,
  setQuantity,
  addToCart,
  updateCart,
} from "../../../redux/actions";
import WeightOptions from "../WeightOptions/WeightOptions";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/styles/overlayscrollbars.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ProductDetails = ({ product, onCloseProduct }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) =>
    Array.isArray(state.cart) ? state.cart : []
  );

  const [quantity, setQuantityState] = useState(1);

  // Перепарсим веса для получения цен
  const weights = product.description.weights
    .split(", ")
    .reduce((acc, weight) => {
      const [amount, price] = weight.split(" - ");
      acc[amount] = parseInt(price.replace(" грн", ""), 10);
      return acc;
    }, {});

  const [selectedWeight, setSelectedWeight] = useState(Object.keys(weights)[0]); // Выбор начального веса

  useEffect(() => {
    console.log("Product Details Component Rendered with product:", product);
  }, [product]);

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
      console.log("Adding to cart item:", item);
      dispatch(addToCart(item));
    }
  };

  const disabledWeights = cart.map((item) => item.weight);

  const totalPrice = weights[selectedWeight] * quantity;

  return (
    <div className={css.productDetails}>
      <h1 className={css.productTitle}>{product.title}</h1>
      <OverlayScrollbarsComponent className={css.containerScrollBar}>
        <div className={css.scrollBar}>
          <p className={css.productDescription}>
            {product.description && product.description.features
              ? product.description.features.join(" ")
              : "Описание отсутствует"}
          </p>
        </div>
      </OverlayScrollbarsComponent>
      <WeightOptions
        selectedWeight={selectedWeight}
        onWeightChange={handleWeightChange}
        disabledWeights={disabledWeights}
        category={product.category} // Передаем категорию продукта
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
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      weights: PropTypes.string.isRequired,
    }).isRequired,
    weight: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onCloseProduct: PropTypes.func.isRequired,
};

export default ProductDetails;
