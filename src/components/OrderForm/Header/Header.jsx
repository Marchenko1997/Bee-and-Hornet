import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { icons } from '../../../../public/icons/index';

const Header = ({ onCloseProduct }) => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleCartClick = () => {
    if (typeof onCloseProduct === 'function') {
      onCloseProduct();
    }
    navigate('/?popup=cart');
  };

  return (
    <div className={css.orderHeader}>
      <div className={css.containerHeader}>
        <Link to="/" className={css.orderLogo}>
          <svg className={css.svgLogo}>
            <use xlinkHref={`${icons}#logo`}></use>
          </svg>
          <p className={css.beeAndHorn}>Бджола та Шершень</p>
        </Link>

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
          <svg className={css.basketIcon} onClick={handleCartClick}>
            <use xlinkHref={`${icons}#basket`}></use>
          </svg>
          {cart.length > 0 && (
            <span className={css.basketCardSircle} onClick={handleCartClick}>
              <span className={css.basketQuantity}>
                {Math.min(cart.length, 5)}
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  onCloseProduct: PropTypes.func,
};

export default Header;
