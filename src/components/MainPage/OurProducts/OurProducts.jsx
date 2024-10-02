import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './OurProducts.module.css';
import ProductSlider from './ProductSlider/ProductSlider';
import { fetchHoney } from '../../../redux/honey/operations';

const OurProducts = ({ onProductClick }) => {
  const [category, setCategory] = useState('Мед');
  const dispatch = useDispatch();
  const honeyData = useSelector((state) => state.honey.honey);

  useEffect(() => {
    dispatch(fetchHoney());
  }, [dispatch]);

  const products = honeyData.filter((product) => product.category === category);

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
            onProductClick={onProductClick} // Передаем функцию для открытия модального окна
          />
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
