import css from "./HoneyHistory.module.css";
import { icons } from "../../../../public/icons/index";
import images from "../images/index.js";
import { useState, useEffect } from "react";

const HoneyHistory = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <>
      <section className={css.heroSection}>
        <div className={css.heroContent}>
          <h1>
            {isLargeScreen ? (
              <>
                Натуральний мед <br /> з сімейною історією
              </>
            ) : (
              <>
                Натуральний <br /> мед з сімейною <br /> історією
              </>
            )}
          </h1>
          <div className={css.wrapperInfo}>
            <p className={css.mainQuotes}>
              {' '}
              <span className={css.mainQuotesSpan}>
                «Видно, що ви без пуття закохані в той мед». <br />
              </span>{' '}
              Григорій Сковорода, байка «Бджола та Шершень». Точніше нашу
              сімейну любов до цієї справи не описати!
            </p>
            <div className={css.images}>
              <picture>
                <source
                  media="(min-width: 1440px )"
                  srcSet={`${images.honeycombDesktop} 1x,
            ${images.honeycombDesktop2x} 2x`}
                />
                <source
                  media="(min-width: 768px )"
                  srcSet={`${images.honeycombTablet} 1x,
                ${images.honeycombTablet2x} 2x`}
                />
                <source
                  media="(max-width: 767.98px )"
                  srcSet={`${images.honeycombMobile} 1x,
                ${images.honeycombMobile2x} 2x`}
                />
                <img
                  src={images.honeycombDesktop}
                  alt="Honeycomb with honey flowing out"
                  className={css.honeyImageTwo}
                />
              </picture>
              <picture>
                <source
                  media="(min-width: 1440px )"
                  srcSet={`${images.honeyDesktop} 1x, ${images.honeyDesktop2x} 2x`}
                />
                <img
                  src={images.honeyDesktop}
                  alt="A jar of honey is on the table"
                  className={css.honeyImageOne}
                />
              </picture>
              <div className={css.buttonContainer}>
                <a href="/#products" className={css.orderButton}>
                  <svg className={css.iconPolygon}>
                    <use xlinkHref={`${icons}#polygon`}></use>
                  </svg>
                  <span className={css.iconPolygonText}>Замовити</span>
                </a>
              </div>
            </div>

            <div className={css.socialLinks}>
              <a
                href="https://t.me/Gmail_samel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={css.icon}>
                  <use xlinkHref={`${icons}#telegram`}></use>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bdzhola_ta_shershen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={css.icon}>
                  <use xlinkHref={`${icons}#instagram`}></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HoneyHistory;