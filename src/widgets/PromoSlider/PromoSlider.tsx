import React from 'react';

import styles from './promoSlider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { PromoSlide } from 'entities/PromoSlide';
import { IFilm } from 'shared/types/IFilm';

type PropsType = {
  movies: IFilm[];
};

export const PromoSlider: React.FC<PropsType> = ({ movies }) => {
  return (
    <Swiper
      // Autoplay
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1.23}
      navigation
      loop
      centeredSlides
      // centeredSlides={false}
      // centerInsufficientSlides={true}
      /* autoplay={{
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }} */
      className={styles.slider}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} className={styles.slide}>
          <PromoSlide movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
