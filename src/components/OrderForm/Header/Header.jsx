import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { icons } from '../../../../public/icons/index';
import { useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
// import NavMenu from './NavMenu/NavMenu';

const Header = ({ onCartClick }) => {
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  const isOrderPage = location.pathname === '/order';

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  const closeNav = () => {
    setIsNavOpen(false);
  }

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeNav();
    }
  }

   useEffect(() => {
     document.addEventListener('mousedown', handleClickOutside);
     return () => {
       document.removeEventListener('mousedown', handleClickOutside);
     };
   }, []);


  return (
    <div className={css.orderHeader}>
      <div className={css.containerHeader}>
        <div className={css.logoContainer}>
          <Link to="/" className={css.orderLogo}>
            <svg className={css.svgLogo}>
              <use xlinkHref={`${icons}#logo`}></use>
            </svg>
            <p className={css.beeAndHorn}>Бджола та Шершень</p>
          </Link>
        </div>

        {!isOrderPage && (
          <>
             <div className={css.navContainer}>
              <nav
                className={`${css.navLink} ${isNavOpen ? css.navListOpen : ''}`}
              >
                <HashLink
                  smooth
                  to="/#products"
                  className={css.link}
                  onClick={closeNav}
                >
                  Каталог
                </HashLink>
                <HashLink
                  smooth
                  to="/#about"
                  className={css.link}
                  onClick={closeNav}
                >
                  Про нас
                </HashLink>
                <HashLink
                  smooth
                  to="/#reviews"
                  className={css.link}
                  onClick={closeNav}
                >
                  Відгуки
                </HashLink>
                <HashLink
                  smooth
                  to="/#contacts"
                  className={css.link}
                  onClick={closeNav}
                >
                  Контакти
                </HashLink>
                {isNavOpen && (
                  <button onClick={closeNav} className={css.closeIconButton}>
                    <svg className={css.closeIcon}>
                      <use xlinkHref={`${icons}#cross-close`} />
                    </svg>
                  </button>
                )}
              </nav>
            </div> 
            <div className={css.iconContainer}>
              <button onClick={toggleNav} className={css.burgerButton}>
                <svg className={css.burgerIcon}>
                  <use xlinkHref={`${icons}#menu`} />
                </svg>
              </button>
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
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  onCartClick: PropTypes.func.isRequired,
};

export default Header;
