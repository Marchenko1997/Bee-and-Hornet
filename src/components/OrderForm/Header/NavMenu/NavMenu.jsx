import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import css from './NavMenu.module.css';
import { icons } from '../../../../../public/icons/index';

const NavMenu = ({ isNavOpen, closeNav }) => (
  <div className={`${css.navContainer} ${isNavOpen ? css.navListOpen : ''}`}>
    <nav className={css.navLink}>
      <HashLink smooth to="/#products" className={css.link} onClick={closeNav}>
        Каталог
      </HashLink>
      <HashLink smooth to="/#about" className={css.link} onClick={closeNav}>
        Про нас
      </HashLink>
      <HashLink smooth to="/#reviews" className={css.link} onClick={closeNav}>
        Відгуки
      </HashLink>
      <HashLink smooth to="/#contacts" className={css.link} onClick={closeNav}>
        Контакти
      </HashLink>
    </nav>
    {isNavOpen && (
      <button onClick={closeNav} className={css.closeIconButton}>
        <svg className={css.closeIcon}>
          <use xlinkHref={`${icons}#cross-close`} />
        </svg>
      </button>
    )}
  </div>
);

NavMenu.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default NavMenu;
