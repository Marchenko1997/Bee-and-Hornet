import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import css from './ProductSlider.module.css';
import { useState } from 'react';
import Product from '../../../HoneyPopup/Product/Product';
import ProductTitle from '../../../../shared/ProductTitle/ProductTitle';
import { useRef, useEffect } from 'react';
import { icons } from '../../../../../public/icons/index';
import clsx from 'clsx';

const ProductSlider = ({ products, category, honeyData, onProductClick }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1440);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openProduct = (product) => {
    onProductClick(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={css.sliderContainer}>
        {isLargeScreen ? (
          <>
            {['Мед', 'Мед з горіхами'].includes(category) && (
              <button
                className={css.prevButton}
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <svg width="48" height="48">
                  <use xlinkHref={`${icons}#arrow-left`} />
                </svg>
              </button>
            )}
            <Swiper
              ref={swiperRef}
              modules={[Navigation, A11y]}
              slidesPerView={3}
              navigation={false}
              rewind={true}
            >
              {products.map((product, index) => (
                <SwiperSlide
                  key={index}
                  className={css.productsItem}
                  onClick={() => openProduct(product)}
                >
                  <div className={css.productInfoBlock}>
                    <div
                      className={clsx(css.imagesContainer, {
                        [css.noMarginBottom]: category !== 'Мед', 
                      })}
                    >
                      <img
                        src={product.image}
                        alt={product.alt}
                        className={css.productImg}
                      />
                    </div>
                    <div
                      className={clsx(css.productInfo, {
                        [css.marginTopForMed]: category === 'Мед', 
                      })}
                    >
                      <ProductTitle title={product.title} />
                      <div className={css.infoWeightContainer}>
                        <h4 className={css.titleWeight}>Вага:</h4>
                        <p className={css.productWeight}>{product.weight}</p>
                      </div>
                      <div className={css.infoPriceContainer}>
                        <h4 className={css.titlePrice}>Ціна:</h4>
                        <p className={css.productPrice}>{product.price}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {['Мед', 'Мед з горіхами'].includes(category) && (
              <button
                className={css.nextButton}
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <svg width="48" height="48">
                  <use xlinkHref={`${icons}#arrow-right`} />
                </svg>
              </button>
            )}
          </>
        ) : (
          <div className={css.gridContainer}>
            {products.map((product, index) => (
              <div
                key={index}
                className={clsx(css.productsItem, {
                  [css.productsItemCategoryHoneyNuts]:
                    category === 'Мед з горіхами',
                })}
                onClick={() => openProduct(product)}
              >
                <div className={css.productInfoBlock}>
                  <div
                    className={clsx(css.imagesContainer, {
                      [css.noMarginBottom]: category !== 'Мед',
                    })}
                  >
                    <img
                      src={product.image}
                      alt={product.alt}
                      className={css.productImg}
                    />
                  </div>
                  <div
                    className={clsx(css.productInfo, {
                      [css.marginTopForMed]: category === 'Мед',
                    })}
                  >
                    <ProductTitle title={product.title} />
                    <div className={css.infoWeightContainer}>
                      <h4 className={css.titleWeight}>Вага:</h4>
                      <p className={css.productWeight}>{product.weight}</p>
                    </div>
                    <div className={css.infoPriceContainer}>
                      <h4 className={css.titlePrice}>Ціна:</h4>
                      <p className={css.productPrice}>{product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedProduct && (
        <Product
          product={selectedProduct}
          onClose={closeProduct}
          honeyData={honeyData}
        />
      )}
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
  category: PropTypes.string.isRequired,
  honeyData: PropTypes.array.isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default ProductSlider;
