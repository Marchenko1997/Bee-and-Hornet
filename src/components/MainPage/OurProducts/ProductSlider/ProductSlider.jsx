// ProductSlider.js
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import css from "./ProductSlider.module.css";
import { useState } from "react";
import Product from "../../../HoneyPopup/Product/Product";

const ProductSlider = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProduct = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; 
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={3}
        navigation
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className={css.productItem} onClick={() => openProduct(product)}>
            <div className={css.productInfoBlock}>
              <div className={css.imagesContainer}>
                <img src={product.image} alt={product.alt} className={css.productImg} />
              </div>
              <div className={css.productInfo}>
                <h3>{product.title}</h3>
              </div>
              <div className={css.infoWeightContainer}>
                <h4 className={css.titleWeight}>Вага</h4>
                <p className={css.productWeight}>{product.weight}</p>
              </div>
              <div className={css.infoPriceContainer}>
                <h4 className={css.titlePrice}>Ціна</h4>
                <p className={css.productPrice}>{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedProduct && <Product product={selectedProduct} onClose={closeProduct} />}
    </>
  );
};

ProductSlider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default ProductSlider;
