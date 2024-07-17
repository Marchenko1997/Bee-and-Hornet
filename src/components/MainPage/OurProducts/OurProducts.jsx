import css from "./OurProducts.module.css";

const OurProducts = () => {
  return (
    <div>
      <section className={css.productsSection}>
        <h2>Наша продукція</h2>
        <div className={css.products}>
          <div className={css.productItem}>Мед акацієвий натуральний</div>
          <div className={css.productItem}>Мед квітковий натуральний</div>
          <div className={css.productItem}>Мед ріпаковий натуральний</div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
