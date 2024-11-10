import css from "./OurHoney.module.css"; // Проверка правильного пути
import SectionMain from "../../../shared/SectionMain/SectionMain";
import Container from "../../../shared/Container/Container";
import MainTitle from "../../../shared/MainTitle/MainTitle";
import {icons} from "../../../../public/icons/index"

const OurHoney = () => {
  return (
    <SectionMain className={css.ourHoneySection}>
      <Container className={css.container}>
        <MainTitle className={css.mainTitle} title={'Наш мед це'} />

        <div className={css.features}>
          <div className={css.featureItemContainer}>
            <svg className={css.featureIcon}>
              <use href={`${icons}#sota`}></use>
              <use className={css.svgArea} href={`${icons}#leaves`}></use>
            </svg>
            <div className={css.featureTextContainer}>
              <p className={css.featureTextFirst}>Цілющі властивості</p>
              <p className={css.featureTextSecond}>
                Наш мед зібраний з цвітінь кращих полів Подніпровʼя.
              </p>
            </div>
          </div>
          <div className={css.featureItemContainer}>
            <svg className={css.featureIcon}>
              <use href={`${icons}#sota`}></use>
              <use className={css.svgArea} href={`${icons}#honeyCan`}></use>
            </svg>
            <div className={css.featureTextContainer}>
              <p className={css.featureTextFirst}>Родинні традиції</p>
              <p className={css.featureTextSecond}>
                Зберігає традиції та має свою сімейну історію.
              </p>
            </div>
          </div>
          <div className={css.featureItemContainer}>
            <svg className={css.featureIcon}>
              <use href={`${icons}#sota`}></use>
              <use className={css.svgArea} href={`${icons}#happyBox`}></use>
            </svg>
            <div className={css.featureTextContainer}>
              <p className={css.featureTextFirst}>Чудовий подарунок</p>
              <p className={css.featureTextSecond}>
                Для близьких людей, адже цей мед про турботу та любов!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionMain>
  );
};

export default OurHoney;
