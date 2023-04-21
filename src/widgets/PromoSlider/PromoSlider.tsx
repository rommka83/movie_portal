import React from 'react';

import styles from './promoSlider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import { PromoSlide } from 'entities/PromoSlide';
import { IFilm } from 'shared/types/IFilm';

type PropsType = {
  movies: IFilm[];
};

export const PromoSlider: React.FC<PropsType> = ({ movies }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1.1}
      navigation
      loop
      centeredSlides
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} className={styles.slide}>
          <PromoSlide movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
