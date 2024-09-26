import css from "./HoneyHistory.module.css";
import honeyImage1 from "../images/honey-desktop.jpeg"
import honeyImage2 from "../images/honeycomb-desktop.jpeg";

const HoneyHistory = () => {
  return (
    <>
      <section className={css.heroSection}>
        <div className={css.heroContent}>
          <h1>
            Натуральний мед <br /> з сімейною історією
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
                  srcSet={`${honeyImage2} 1x, ${honeyImage2} 2x`}
                  media="(min-width: 800px)"
                />
                <img
                  src={honeyImage2}
                  alt="Honeycomb"
                  className={css.honeyImageTwo}
                />
              </picture>
              <picture>
                <source
                  srcSet={`${honeyImage1} 1x, ${honeyImage1} 2x`}
                  media="(min-width: 800px)"
                />
                <img
                  src={honeyImage1}
                  alt="Honey"
                  className={css.honeyImageOne}
                />
              </picture>
              <div className={css.buttonContainer}>
                <a href="/#products" className={css.orderButton}>
                  <svg className={css.iconPolygon}>
                    <use xlinkHref="../../../public/icons/sprite.svg#polygon"></use>
                  </svg>
                  <span className={css.iconPolygonText}>Замовити</span>
                </a>
              </div>
            </div>

            <div className={css.socialLinks}>
              <a
                href="https://t.me/bdzhola_ta_shershen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={css.icon}>
                  <use xlinkHref="/icons/sprite.svg#telegram"></use>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bdzhola_ta_shershen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={css.icon}>
                  <use xlinkHref="/icons/sprite.svg#instagram"></use>
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