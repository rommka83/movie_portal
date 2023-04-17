import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./promoSlider.module.css";
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import ButtonOrLink from "shared/ui/ButtonOrLink";


type PropsType = {

}


export const PromoSlider = () => {

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
                pauseOnMouseEnter: true
            }}
        >
            <SwiperSlide className={styles.slide}>
                <div className={styles.block}>
                    <img className={styles.background} src="https://thumbs.dfs.ivi.ru/storage15/contents/b/d/03674ff6e27da1cd69f1f0e9337249.jpg/1216x524/?q=85" />
                    <NavLink to='/watch' className={styles.body}>
                        <div className={styles.content}>
                            <div className={styles.logoContainer}>
                                <img src="https://thumbs.dfs.ivi.ru/storage30/contents/a/a/c55629c1cb82b0ac7c0d9aca539d89.png/x200/" className={styles.logo} alt="" />
                            </div>
                            <div className={styles.description}>
                                Звезда «Тетриса» и «Нулевого пациента» Никита Ефремов бросает престижную работу ради великой цели
                            </div>
                            <div className={styles.btnContainer}>
                                <ButtonOrLink className={styles.btn} variant='primary'>Смотреть</ButtonOrLink>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <div className={styles.block}>
                    <img className={styles.background} src="https://thumbs.dfs.ivi.ru/storage15/contents/b/d/03674ff6e27da1cd69f1f0e9337249.jpg/1216x524/?q=85" />
                    <NavLink to='/watch' className={styles.body}>
                        <div className={styles.content}>
                            <div className={styles.logoContainer}>
                                <img src="https://thumbs.dfs.ivi.ru/storage30/contents/a/a/c55629c1cb82b0ac7c0d9aca539d89.png/x200/" className={styles.logo} alt="" />
                            </div>
                            <div className={styles.description}>
                                Звезда «Тетриса» и «Нулевого пациента» Никита Ефремов бросает престижную работу ради великой цели
                            </div>
                            <div className={styles.btnContainer}>
                                <ButtonOrLink className={styles.btn} variant='primary'>Смотреть</ButtonOrLink>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <div className={styles.block}>
                    <img className={styles.background} src="https://thumbs.dfs.ivi.ru/storage15/contents/b/d/03674ff6e27da1cd69f1f0e9337249.jpg/1216x524/?q=85" />
                    <NavLink to='/watch' className={styles.body}>
                        <div className={styles.content}>
                            <div className={styles.logoContainer}>
                                <img src="https://thumbs.dfs.ivi.ru/storage30/contents/a/a/c55629c1cb82b0ac7c0d9aca539d89.png/x200/" className={styles.logo} alt="" />
                            </div>
                            <div className={styles.description}>
                                Звезда «Тетриса» и «Нулевого пациента» Никита Ефремов бросает престижную работу ради великой цели
                            </div>
                            <div className={styles.btnContainer}>
                                <ButtonOrLink className={styles.btn} variant='primary'>Смотреть</ButtonOrLink>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <div className={styles.block}>
                    <img className={styles.background} src="https://thumbs.dfs.ivi.ru/storage15/contents/b/d/03674ff6e27da1cd69f1f0e9337249.jpg/1216x524/?q=85" />
                    <NavLink to='/watch' className={styles.body}>
                        <div className={styles.content}>
                            <div className={styles.logoContainer}>
                                <img src="https://thumbs.dfs.ivi.ru/storage30/contents/a/a/c55629c1cb82b0ac7c0d9aca539d89.png/x200/" className={styles.logo} alt="" />
                            </div>
                            <div className={styles.description}>
                                Звезда «Тетриса» и «Нулевого пациента» Никита Ефремов бросает престижную работу ради великой цели
                            </div>
                            <div className={styles.btnContainer}>
                                <ButtonOrLink className={styles.btn} variant='primary'>Смотреть</ButtonOrLink>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}


