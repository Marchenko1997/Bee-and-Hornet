
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.orderHeader}>
      <div className={css.containerHeader}>
        <a href="" className={css.orderLogo}>
          <svg className={css.svgLogo}>
            <use xlinkHref="../../../public/icons/sprite.svg#logo"></use>
          </svg>
          <p className={css.beeAndHorn}>Бджола та Шершень</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
