import css from "./Footer.module.css";
import { Link } from "react-router-dom";
import {icons} from "../../../public/icons/index";


const Footer = () => {
  return (
    <>
      <footer className={css.footer} id="contacts">
        <div className={css.footerContainer}>
          <div className={css.footerContent}>
            <Link to="/" className={css.orderLogo}>
              <svg className={css.svgLogo}>
                <use xlinkHref={`${icons}#logo`}></use>
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
                  <a
                    href="https://t.me/Gmail_samel"
                    target="_blank"
                    className={css.socialLink}
                  >
                    <svg className={css.svgSocial}>
                      <use xlinkHref={`${icons}#telegram`}></use>
                    </svg>
                  </a>
                </li>
                <li className={css.socialItem}>
                  <a
                    href="https://www.instagram.com/bdzhola_ta_shershen"
                    target="_blank"
                    className={css.socialLink}
                  >
                    <svg className={css.svgSocial}>
                      <use xlinkHref={`${icons}#instagram`}></use>
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
