import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <div className={css.orderHeader}>
      <div className={css.containerHeader}>
        {/* Логотип, клік по якому переводить на головну сторінку */}
        <Link to="/" className={css.orderLogo}>
          <svg className={css.svgLogo}>
            <use xlinkHref="../../../public/icons/sprite.svg#logo"></use>
          </svg>
          <p className={css.beeAndHorn}>Бджола та Шершень</p>
        </Link>
        {/* Навігаційні посилання */}
        <nav className={css.navLink}>
          {/* Якорна навігація для переходу до секцій на одній сторінці */}
          <HashLink smooth to="/#products" className={css.link}>Каталог</HashLink>
          <HashLink smooth to="/#about" className={css.link}>Про нас</HashLink>
          <HashLink smooth to="/#reviews" className={css.link}>Відгуки</HashLink>
          <HashLink smooth to="/#contacts" className={css.link}>Контакти</HashLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
