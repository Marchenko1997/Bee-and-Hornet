import css from "./OurHoney.module.css"; // Проверка правильного пути
import SectionMain from "../../../shared/SectionMain/SectionMain";
import Container from "../../../shared/Container/Container";
import MainTitle from "../../../shared/MainTitle/MainTitle";

const OurHoney = () => {
  return (
    <SectionMain className={css.ourHoneySection}>
      <Container className={css.container}>
        <MainTitle className={css.mainTitle} title={"Наш мед це"} />

        <div className={css.features}>
          <div className={css.featureItemContainer}>
            <svg className={css.featureIcon}>
            <use href="/icons/sprite.svg#sota"></use>
            <use className={css.svgArea} href="/icons/sprite.svg#leaves"></use>
            </svg>
            <div className={css.featureTextContainer}>
              <p className={css.featureTextFirst}>Цілющі властивості</p>
              <p className={css.featureTextSecond}>Наш мед зібраний з цвітінь кращих полів Подніпровʼя.</p>
            </div>
          </div>
          <div className={css.featureItemContainer}>
            <svg className={css.featureIcon}>
            <use href="/icons/sprite.svg#sota"></use>
            <use className={css.svgArea} href="/icons/sprite.svg#honeyCan"></use>
            </svg>
            <div className={css.featureTextContainer}>
              <p className={css.featureTextFirst}>Родинні традиції</p>
              <p className={css.featureTextSecond}>Зберігає традиції та має свою сімейну <br />історію.</p>
            </div>
          </div>
          <div className={css.featureItemContainer}>
            <svg className={css.featureIcon}>
            <use href="/icons/sprite.svg#sota"></use>
            <use className={css.svgArea} href="/icons/sprite.svg#happyBox"></use>
            </svg>
            <div className={css.featureTextContainer}>
              <p className={css.featureTextFirst}>Чудовий подарунок</p>
              <p className={css.featureTextSecond}>Для близьких людей, адже цей мед про турботу та любов!</p>
            </div>
          </div>
        </div>
      </Container>
    </SectionMain>
  );
};

export default OurHoney;
