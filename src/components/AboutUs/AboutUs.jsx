import css from "./AboutUs.module.css";


const AboutUs = () => {
    return (
        <div className={css.aboutUsContainer}>
           <section className={css.aboutUsSection}>
        <h2 className = {css.abooutUsTitle}>Про нас</h2>
        <div className = {css.infoCompany}> 
            <div className = {css.blockFirst}>
                <picture></picture>
            </div>
            <div className = {css.blockSecond}></div>
            <div className = {css.blockThirs}></div>
        <p>
          Бажаємо здоров’я! Ми невеличка українська родина, яка розвиває
          бджільництво вже у третьому поколінні.
        </p>
        <div className={css.aboutUsContent}>
          <div className={css.aboutUsItem}>
            Історію своєї родини розказую вам я, Анастасія, от тут на фото стою
            в соняхах.
          </div>
          <div className={css.aboutUsItem}>
            Це мій батько Андрій. Він обожнює бджіл, турбується про довкілля та
            зберігає всі знання, які передавав йому його батько — мій дідусь
            Гриша.
          </div>
          <div className={css.aboutUsItem}>
            Бджільництво — це справжнє мистецтво і традиційне ремесло для нашої
            родини.
          </div>
        </div>
        </div>
        
      </section>
        </div>
    );
};


export default AboutUs;