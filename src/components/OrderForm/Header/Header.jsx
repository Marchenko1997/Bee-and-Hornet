import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { icons } from '../../../../public/icons/index';
import { useLocation } from 'react-router-dom';

const Header = ({ onCartClick }) => {
  const location = useLocation();
  const cart = useSelector((state) => state.cart);

  const isOrderPage = location.pathname === '/order';

  return (
    <div className={css.orderHeader}>
      <div className={css.containerHeader}>
        <Link to="/" className={css.orderLogo}>
          <svg className={css.svgLogo}>
            <use xlinkHref={`${icons}#logo`}></use>
          </svg>
          <p className={css.beeAndHorn}>Бджола та Шершень</p>
        </Link>

        {!isOrderPage && (
          <>
            <nav className={css.navLink}>
              <HashLink smooth to="/#products" className={css.link}>
                Каталог
              </HashLink>
              <HashLink smooth to="/#about" className={css.link}>
                Про нас
              </HashLink>
              <HashLink smooth to="/#reviews" className={css.link}>
                Відгуки
              </HashLink>
              <HashLink smooth to="/#contacts" className={css.link}>
                Контакти
              </HashLink>
            </nav>

            <div className={css.basketContainer}>
              <svg className={css.basketIcon} onClick={onCartClick}>
                <use xlinkHref={`${icons}#basket`}></use>
              </svg>
              {cart.length > 0 && (
                <span className={css.basketCardSircle} onClick={onCartClick}>
                  <span className={css.basketQuantity}>
                    {Math.min(cart.length, 5)}
                  </span>
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  onCartClick: PropTypes.func.isRequired, // Ожидаем функцию открытия корзины
};

export default Header;
