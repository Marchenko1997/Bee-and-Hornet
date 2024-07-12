import css from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={css.orderHeader}>
      <div className={css.containerHeader}>
        <Link to="/" className={css.orderLogo}>
          <svg className={css.svgLogo}>
            <use xlinkHref="../../../public/icons/sprite.svg#logo"></use>
          </svg>
          <p className={css.beeAndHorn}>Бджола та Шершень</p>
        </Link>
        <nav className={css.nav}>
          <Link to="/product" className={css.navLink}>Каталог</Link>
          <a href="#about" className={css.navLink}>Про нас</a>
          <a href="#reviews" className={css.navLink}>Відгуки</a>
          <a href="#contacts" className={css.navLink}>Контакти</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
