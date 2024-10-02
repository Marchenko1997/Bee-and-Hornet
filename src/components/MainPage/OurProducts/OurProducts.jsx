import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './OurProducts.module.css';
import ProductSlider from './ProductSlider/ProductSlider';
import { fetchHoney } from '../../../redux/honey/operations';
import PropTypes from 'prop-types';
import { icons } from "../../../../public/icons/index";
import { toastify} from "../../OrderForm/shared/Toastify/tostify";

const OurProducts = ({ onProductClick }) => {
  const [category, setCategory] = useState('Мед');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const honeyData = useSelector((state) => state.honey.honey);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        await dispatch(fetchHoney());
      } catch (error) {
        toastify.error('Щось пішло не так :( Перезавантажте сторінку.');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
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

          {loading ? (
            <div className={css.loaderContainer}>
              <svg width="48" height="48" className={css.loader}>
                <use xlinkHref={`${icons}#logo`} />
              </svg>
            </div>
          ) : (
            <ProductSlider
              products={products}
              category={category}
              honeyData={honeyData}
              onProductClick={onProductClick}
            />
          )}
        </div>
      </section>
    </div>
  );
};


OurProducts.propTypes = {
  onProductClick: PropTypes.func.isRequired,
};



export default OurProducts;
