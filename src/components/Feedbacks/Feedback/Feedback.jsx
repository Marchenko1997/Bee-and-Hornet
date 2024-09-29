import css from './Feedbak.module.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { fetchReviews } from '../../../services/reviewsData';
import { icons } from '../../../../public/icons/index'; 

const Feedback = () => {
  const [swiper, setSwiper] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const fetchedReviews = await fetchReviews();
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Помилка завантаження відгуків:', error.message); 
      }
    };
    loadReviews();
  }, []);

  return (
    <section className={css.feedbackSection} id="reviews">
      <div className={css.feedbackContainer}>
        <h2 className={css.feedbackTitle}>Відгуки покупців</h2>
        <div className={css.feedbackCardsContainer}>
          <button
            className={css.prevButton}
            onClick={() => swiper && swiper.slidePrev()}
          >
            <svg className={css.svg}>
              <use xlinkHref={`${icons}#arrow-left`} />
            </svg>
          </button>
          <Swiper
            rewind={true}
            onSwiper={setSwiper}
            slidesPerView={1}
            width={1440}
          >
            {Array.isArray(reviews) &&
              reviews.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={css.card}>
                    <div className={css.photoContainer}>
                      <svg className={css.svgClassName}>
                        <use
                          xlinkHref={`${icons}#polygon`}
                          className={css.iconClassName}
                        ></use>
                      </svg>
                      <img
                        className={css.photo}
                        src={item.photo}
                        alt={item.name}
                      />
                    </div>
                    <div className={css.content}>
                      <h3 className={css.name}>{item.name}</h3>
                      <p className={css.review}>{item.review}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <button
            className={css.nextButton}
            onClick={() => swiper && swiper.slideNext()}
          >
            <svg className={css.svg}>
              <use xlinkHref={`${icons}#arrow-right`} />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
