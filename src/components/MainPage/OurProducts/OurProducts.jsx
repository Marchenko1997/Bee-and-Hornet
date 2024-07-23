import { useState } from 'react';
import clsx from 'clsx';
import css from "./OurProducts.module.css";
import ProductSlider from "./ProductSlider/ProductSlider";
import productsData from "./products.json";


// Импорт изображений
import honeyAcacia from "./images/МедАкацієвий-desktop.jpeg";
import honeyFlower from "./images/МедКвітковий-desktop.jpeg";
import honeyRapeseed from "./images/МедРіпаковий-desktop.jpeg";
import honeySunny from "./images/МедСоняшниковий-desktop.jpeg";
import walnutHoney from "./images/ВолозськиГоріхи-desktop.jpeg";
import almondHoney from "./images/ЗМигдалем-desktop.jpeg";
import hazelnutHoney from "./images/ЗЛіщиною-desktop.jpeg";
import cashewHoney from "./images/ЗКешю-esktop.jpeg";
import honeycomb from "./images/Стільник-desktop.jpeg";
import pollen from "./images/Пилок-desktop.jpeg";

const imageMap = {
  "МедАкацієвий-desktop.jpeg": honeyAcacia,
  "МедКвітковий-desktop.jpeg": honeyFlower,
  "МедРіпаковий-desktop.jpeg": honeyRapeseed,
  "МедСоняшниковий-desktop.jpeg": honeySunny,
  "ВолозськиГоріхи-desktop.jpeg": walnutHoney,
  "ЗМигдалем-desktop.jpeg": almondHoney,
  "ЗЛіщиною-desktop.jpeg": hazelnutHoney,
  "ЗКешю-desktop.jpeg": cashewHoney,
  "Стільник-desktop.jpeg": honeycomb,
  "Пилок-desktop.jpeg": pollen
};

const OurProducts = () => {
  const [category, setCategory] = useState('Мед');
  
  const products = productsData
    .filter((product) => product.category === category)
    .map((product) => ({
      ...product,
      image: imageMap[product.image] || product.image,
    }));

  return (
    <div>
      <section className={css.productsSection}>
        <div className={css.container}>
          <h2 className={css.title}>Наша продукція</h2>
          <ul className={css.productList}>
            {['Мед', 'Мед з горіхами', 'Стільники', 'Пилок'].map((honey) => (
              <li 
                key={honey} 
                className={clsx(css.productItem, { [css.active]: category === honey })}
                onClick={() => setCategory(honey)}
              >
                <h3 className={css.productTitle}>{honey}</h3>
              </li>
            ))}
          </ul>
          <ProductSlider products={products} />
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
