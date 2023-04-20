import React from 'react';
import styles from './moviebadge.module.css';
import { PosterCards } from 'shared/bisnes/PosterCards/PosterCards';
import { CardTitle } from 'shared/ui/CardTitle/CardTitle';
import { BannerHover } from 'entities/BannerHover';
import { PriceBadge } from 'shared/ui/PriceBadge/PriceBadge';
import { useTranslation } from 'react-i18next';
import AgeRestrictions from 'shared/bisnes/AgeRestrictions';
import { IFilm } from 'shared/types/film';

interface IProps {
  width: number;
  film: IFilm;
}

export function MovieBadge({ width, film }: IProps) {
  const { i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <article className={styles.wrapper} style={{ width: `${width}px` }}>
      <div className={styles.banner}>
        <div className={styles.bannerMain}>
          <div className={styles.pic}>
            <PosterCards
              src={film.poster.url}
              name={
                lng === 'ru' ? film.name : film.enName ? film.enName : film.name
              }
            />
          </div>
          <div className={styles.age}>
            <AgeRestrictions age={film.ageRating} />
          </div>
        </div>
        <div className={styles.bannerHover}>
          <BannerHover film={film} />
        </div>
      </div>
      <div className={styles.title}>
        <CardTitle
          children={
            lng === 'ru'
              ? film.name
              : film.enName === ''
              ? film.name
              : film.enName
          }
        />
      </div>
      <div className={styles.statusPrice}>
        <PriceBadge price={film.rating.kp > 5 ? true : false} />
      </div>
    </article>
  );
}
