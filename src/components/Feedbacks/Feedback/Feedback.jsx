import css from './Feedbak.module.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from '../data/data.js';

const Feedback = () => {
    const [swiper, setSwiper] = useState(null);
  return (
    <>
    <section className={css.feedbackSection}>
    <div className={css.feedbackContainer}>
        <h2 className={css.feedbackTitle}>Відгуки покупців</h2>
        <div className={css.feedbackCardsContainer}>
        <button className={css.prevButton} onClick={() => swiper && swiper.slidePrev()}>
          <svg className={css.svg}>
            <use xlinkHref="../../public/icons/sprite.svg#arrow-left" />
          </svg>
        </button>
        <Swiper rewind={true} onSwiper={setSwiper} slidesPerView={1}>
          {Array.isArray(data) && data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={css.card}>
                <div className={css.photoContainer}>
                  <svg className={css.svgClassName}>
                    <use xlinkHref="../../public/icons/sprite.svg#polygon" className={css.iconClassName}></use>
                  </svg>
                  <img className={css.photo} src={item.photo} alt={item.name} />
                </div>
                <div className={css.content}>
                  <h3 className={css.name}>{item.name}</h3>
                  <p className={css.review}>{item.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={css.nextButton} onClick={() => swiper && swiper.slideNext()}>
          <svg className={css.svg}>
            <use xlinkHref="../../public/icons/sprite.svg#arrow-right" />
          </svg>
        </button>
        </div>
    </div>
    </section>
  
    </>
  )
}

export default Feedback