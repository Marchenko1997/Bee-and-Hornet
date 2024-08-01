import css from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={css.footer} id="contacts">
        <div className={css.footerContainer}>
          <div className={css.footerContent}>
            <Link to="/" className={css.orderLogo}>
              <svg className={css.svgLogo}>
                <use xlinkHref="../../../public/icons/sprite.svg#logo"></use>
              </svg>
              <p className={css.beeAndHorn}>Бджола та Шершень</p>
            </Link>
            <div className={css.socialWrap}>
              <ul className={css.contactsList}>
                <li className={css.emailItem}>
                  <a
                    href="malito:marchenkohalyna888@gmail.com"
                    className={css.email}
                  >
                    marchenkohalyna888@gmail.com
                  </a>
                </li>
                <li className={css.phoneItem}>
                  <a href="tel:+380508844571" className={css.phone}>
                    +380508844571
                  </a>
                </li>
              </ul>
              <ul className={css.socialList}>
                <li className={css.socialItem}>
                  <a href="#" className={css.socialLink}>
                    <svg className={css.svgSocial}>
                      <use xlinkHref="../../../public/icons/sprite.svg#telegram"></use>
                    </svg>
                  </a>
                </li>
                <li className={css.socialItem}>
                  <a href="#" className={css.socialLink}>
                    <svg className={css.svgSocial}>
                      <use xlinkHref="../../../public/icons/sprite.svg#instagram"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
