
import css from "./OurProducts.module.css";
import ProductSlider from "./ProductSlider/ProductSlider";
import productsData from "./products.json";

// Импорт изображений
import honeyAcacia from "./images/МедАкацієвий-desktop.jpeg";
import honeyFlower from "./images/МедКвітковий-desktop.jpeg";
import honeyRapeseed from "./images/МедРіпаковий-desktop.jpeg";
import honeySunny from "./images/МедСоняшниковий-desktop.jpeg";

const imageMap = {
  "МедАкацієвий-desktop.jpeg": honeyAcacia,
  "МедКвітковий-desktop.jpeg": honeyFlower,
  "МедРіпаковий-desktop.jpeg": honeyRapeseed,
  "МедСоняшниковий-desktop.jpeg": honeySunny,
};

const products = productsData.map((product) => ({
  ...product,
  image: imageMap[product.image] || product.image,
}));

const OurProducts = () => {
  return (
    <div>
      <section className={css.productsSection}>
        <div className={css.container}>
          <h2 className={css.title}>Наша продукція</h2>
          <ul className={css.productList}>
            <li className={css.productItem}>
              <h3 className={css.productTitle}>Мед</h3>
            </li>
            <li className={css.productItem}>
              <h3 className={css.productTitle}>Мед з горіхами</h3>
            </li>
            <li className={css.productItem}>
              <h3 className={css.productTitle}>Стільники</h3>
            </li>
            <li className={css.productItem}>
              <h3 className={css.productTitle}>Пилок</h3>
            </li>
          </ul>
          <ProductSlider products={products} />
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
