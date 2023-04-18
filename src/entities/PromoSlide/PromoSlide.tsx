import React from "react";
import { NavLink } from "react-router-dom";
import { UseMedia } from "shared/hooks/useMedia";

import styles from "./promoSlide.module.css";

import ButtonOrLink from "shared/ui/ButtonOrLink";

import { IFilm } from "entities/MovieBadge";


type PropsType = {
    movie: IFilm;
}


export const PromoSlide: React.FC<PropsType> = ({ movie }) => {

    const swapImage = UseMedia('(max-width: 450px)');



    return (
        <div className={styles.block}>
            <img
                className={styles.background}
                src={swapImage ? movie.images.small : movie.images.large}
            />
            <NavLink to='/watch' className={styles.body}>
                <div className={styles.content}>
                    <div className={styles.logoContainer}>
                        <img
                            src={movie.logo}
                            className={styles.logo}
                            alt=""
                        />
                    </div>
                    <div className={styles.description}>
                        {movie.synopsis}
                    </div>
                    <div className={styles.btnContainer}>
                        <ButtonOrLink
                            className={styles.btn}
                            variant='primary'
                        >
                            {movie.price ? 'Смотреть по подписке' : 'Смотреть'}
                        </ButtonOrLink>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

