import ProductDetails from "../ProductDetails/ProductDetails";
import css from "./Product.module.css";
import PropTypes from "prop-types";

const Product = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className={css.overlay}>
      <div className={css.productContainer}>
        <button className={css.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={css.productImage}>
          <img src={product.image} alt={product.alt} />
        </div>
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Product;
