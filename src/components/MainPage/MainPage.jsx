
import Header from '../OrderForm/Header/Header';
import css from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={css.mainPage}>
      <Header />
      <section className={css.heroSection}>
        <div className={css.heroContent}>
          <h1>Натуральний мед з сімейною історією</h1>
          <p>«Видно, що ви без пуття закохані в той мед» — Григорій Сковорода, байка «Бджола та Шершень».</p>
          <p>Точніше нашу сімейну любов до цієї справи не описати!</p>
        </div>
      </section>
      <section className={css.featuresSection}>
        <h2>Наш мед це</h2>
        <div className={css.features}>
          <div className={css.featureItem}>Цілющі властивості</div>
          <div className={css.featureItem}>Родинні традиції</div>
          <div className={css.featureItem}>Чудовий подарунок</div>
        </div>
      </section>
      <section className={css.productsSection}>
        <h2>Наша продукція</h2>
        <div className={css.products}>
          <div className={css.productItem}>Мед акацієвий натуральний</div>
          <div className={css.productItem}>Мед квітковий натуральний</div>
          <div className={css.productItem}>Мед ріпаковий натуральний</div>
        </div>
      </section>
      <section className={css.aboutUsSection}>
        <h2>Про нас</h2>
        <p>Бажаємо здоров’я! Ми невеличка українська родина, яка розвиває бджільництво вже у третьому поколінні.</p>
        <div className={css.aboutUsContent}>
          <div className={css.aboutUsItem}>Історію своєї родини розказую вам я, Анастасія, от тут на фото стою в соняхах.</div>
          <div className={css.aboutUsItem}>Це мій батько Андрій. Він обожнює бджіл, турбується про довкілля та зберігає всі знання, які передавав йому його батько — мій дідусь Гриша.</div>
          <div className={css.aboutUsItem}>Бджільництво — це справжнє мистецтво і традиційне ремесло для нашої родини.</div>
        </div>
      </section>
      <section className={css.reviewsSection}>
        <h2>Відгуки покупців</h2>
        <div className={css.reviewItem}>
          <p>Для мене важливо підтримувати сімейний бізнес. Я більше ціную кожну краплю цього меду. (Уявляю як ти весь день влітку працюєш з батьком😊) І мені здається смак дуже насиченим в порівнянні з магазинним.</p>
          <p>Мар'яна</p>
        </div>
      </section>
      <footer className={css.footer}>
        <p>Бджола та Шершень</p>
        <p>Email: plokhaanastasiia@gmail.com</p>
        <p>Phone: +38 096 888 07 39</p>
        <p>Created by GoIT</p>
      </footer>
    </div>
  );
};

export default MainPage;
