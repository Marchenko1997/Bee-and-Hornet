// src/components/OurProducts/OurProducts.jsx
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './OurProducts.module.css';
import ProductSlider from './ProductSlider/ProductSlider';
import { fetchHoney } from '../../../redux/honey/operations';
import Product from '../../HoneyPopup/Product/Product';

const OurProducts = () => {
  const [category, setCategory] = useState('Мед');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();
  const honeyData = useSelector((state) => state.honey.honey);
  const isLoading = useSelector((state) => state.honey.isLoading);
  const error = useSelector((state) => state.honey.error);

  useEffect(() => {
    dispatch(fetchHoney());
  }, [dispatch]);

  const products = honeyData.filter((product) => product.category === category);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка загрузки данных: {error}</p>;
  }

  return (
    <div>
      <section className={css.productsSection}>
        <div className={css.container} id="products">
          <h2 className={css.title}>Наша продукція</h2>
          <ul className={css.productList}>
            {['Мед', 'Мед з горіхами', 'Стільники', 'Пилок'].map((honey) => (
              <li
                key={honey}
                className={clsx(css.productItem, {
                  [css.active]: category === honey,
                })}
                onClick={() => setCategory(honey)}
              >
                <h3 className={css.productTitle}>{honey}</h3>
              </li>
            ))}
          </ul>
          <ProductSlider
            products={products}
            category={category}
            honeyData={honeyData}
            onProductClick={handleProductClick}
          />
        </div>
      </section>
      {selectedProduct && (
        <Product
          product={selectedProduct}
          onClose={handleCloseProduct}
          honeyData={honeyData} // Передаем honeyData
        />
      )}
    </div>
  );
};

export default OurProducts;
